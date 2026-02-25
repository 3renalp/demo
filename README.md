## SBGN Web Visualization Demo

This project is a minimal web-based demo for visualizing SBGNML (Systems
Biology Graphical Notation Markup Language) files using Cytoscape.js and
related libraries.

The main goal of this project is to read an SBGNML file, convert it into
Cytoscape.js JSON format, and render it in the browser with
SBGN-compliant styling.

## Features

-   Upload and read an SBGNML file
-   Convert SBGNML into Cytoscape.js JSON
-   Render the graph in the browser
-   Apply SBGN-compliant visual styling
-   Support automatic layout when position data is missing


## Installation

Install dependencies:

```npm install```

# Run

Start the development server:

```npm run dev```

Open the local address shown in the terminal.

## How It Works

1.  The user selects an SBGNML file from the interface.
2.  The file is read as text in the browser.
3.  sbgnml-to-cytoscape converts the XML content into Cytoscape JSON.
4.  Cytoscape.js renders the graph.
5.  cytoscape-sbgn-stylesheet applies SBGN visual rules.
6.  If layout information exists, preset layout is used. Otherwise, an
    automatic layout (e.g., cose) is applied.
