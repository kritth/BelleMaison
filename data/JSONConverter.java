import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;

public class JSONConverter
{
	public static void main(String[] args)
	{
		// Read in JSON
		BufferedReader br = null;
		String txt = "";
		try
		{
			String line;
			br = new BufferedReader(new FileReader("estates.json"));
			
			while((line = br.readLine()) != null)
			{
				txt += line;
			}
			System.out.println("Successfully read file.");
		}
		catch (IOException e)
		{
			e.printStackTrace();
			System.err.println("File not found.");
			System.exit(0);
		}
		finally
		{
			try
			{
				if (br != null) br.close();
			}
			catch (IOException e)
			{
				e.printStackTrace();
			}
		}
		
		// Replace
		txt = txt.replace('\'', ' ');
		txt = txt.replace('\t', ' ');
		txt = txt.replace("//", "\\/\\/");
		System.out.println("Successfully replace characters.");
		
		// Add variable declaration
		txt = "var data = JSON.parse('" + txt + "');";
		
		// Write to file
		try
		{
			PrintWriter writer = new PrintWriter("data.js", "UTF-8");
			writer.println(txt);
			writer.close();
			System.out.println("Successfully write to file");
		}
		catch (FileNotFoundException | UnsupportedEncodingException e)
		{
			System.err.println("Cannot write file");
			e.printStackTrace();
		}
		
		System.out.print("Press anything to exit....");
		try {
			System.in.read();
		} catch (IOException e) {
			System.exit(0);
		}
	}
}
