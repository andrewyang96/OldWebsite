import json
import os

BASEDIR = os.path.dirname(os.path.realpath(__file__))
QUOTESFILE = os.path.join(BASEDIR, "assets", "quotes.txt")
OUTFILE = os.path.join(BASEDIR, "assets", "js", "quotes.js")

def getLines():
    print "Getting lines"
    with open(QUOTESFILE, "r") as f:
        lines = [line.replace("\\n", "<br/>").replace("\\\\", "\\")
                 for line in f.read().splitlines() if line != ""]
        if len(lines) % 2 != 0:
            raise ValueError("Number of lines in the quotes file should be even")
        return lines

def main():
    lines = getLines()
    
    # Process lines
    print "Processing lines"
    paired = zip(lines, lines[1:])[::2]
    quotes = []
    for quote, author in paired:
        quotes.append({
            "quote": quote,
            "author": author
        })
    
    # Output to file
    output = "var QUOTES = " + json.dumps(quotes, indent=4) + ";"
    with open(OUTFILE, "w") as f:
        print "Outputting lines"
        f.write(output)
        print "Done!"

if __name__ == "__main__":
    main()
