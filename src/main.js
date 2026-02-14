import cytoscape from "cytoscape";
import sbgnmlToCytoscape from "sbgnml-to-cytoscape";
import sbgnStylesheet from "cytoscape-sbgn-stylesheet";

const cy = cytoscape({
  container: document.getElementById("cy"),
  elements: [],
  style: sbgnStylesheet(cytoscape),
  layout: { name: "grid" }
});

function bboxToPos(elements) {
  for (const el of elements.nodes) {

    const bbox = el.data?.bbox;
    if (!bbox) continue;

    const x = Number(bbox.x);
    const y = Number(bbox.y);
    const w = Number(bbox.w);
    const h = Number(bbox.h);

    if (!Number.isFinite(x) || !Number.isFinite(y)) continue;

    const cx = x + w / 2;
    const cy = y + h / 2;

    el.position = { x: cx, y: cy };
  }
  return elements;
}


document.getElementById("visualize").onclick = async () => {
  const file = document.getElementById("file").files[0];
  if (!file) return;

  const text = await file.text();

  const result = sbgnmlToCytoscape(text);

  let elements = result;

  elements = bboxToPos(elements);

  cy.elements().remove();
  cy.add(elements);

  cy.layout({ name: "preset" }).run();
}
