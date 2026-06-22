import type { jsPDF } from 'jspdf';
import { carta, CartaCategoria } from '@/data/carta';

const PURPLE: [number, number, number] = [150, 64, 145];
const ORANGE: [number, number, number] = [241, 135, 0];
const GRAY: [number, number, number] = [90, 90, 90];

const formatPrecio = (precio: number) =>
  `$${precio.toFixed(2).replace('.', ',')}`;

const PAGE_W = 210; // A4 mm
const MARGIN = 15;
const COL_GAP = 10;
const COL_W = (PAGE_W - MARGIN * 2 - COL_GAP) / 2;
const COLS = [MARGIN, MARGIN + COL_W + COL_GAP];
const TOP_Y = 42;
const MAX_Y = 282;

function drawHeader(doc: jsPDF) {
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...PURPLE);
  doc.setFontSize(24);
  doc.text('Heladería Lattia', PAGE_W / 2, 20, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...ORANGE);
  doc.setFontSize(12);
  doc.text('Nuestra Carta', PAGE_W / 2, 28, { align: 'center' });

  doc.setDrawColor(...ORANGE);
  doc.setLineWidth(0.5);
  doc.line(MARGIN, 33, PAGE_W - MARGIN, 33);
}

function estimateHeight(cat: CartaCategoria) {
  return 6 + (cat.nota ? 4 : 0) + cat.items.length * 5 + 5;
}

function drawCategory(doc: jsPDF, cat: CartaCategoria, x: number, y: number) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...PURPLE);
  doc.text(cat.nombre, x, y);

  y += 1.5;
  doc.setDrawColor(...ORANGE);
  doc.setLineWidth(0.3);
  doc.line(x, y, x + COL_W, y);
  y += 4;

  if (cat.nota) {
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(...ORANGE);
    doc.text(cat.nota, x, y);
    y += 4;
  }

  doc.setFontSize(10);
  for (const item of cat.items) {
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...GRAY);
    doc.text(item.nombre, x, y);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...PURPLE);
    doc.text(formatPrecio(item.precio), x + COL_W, y, { align: 'right' });
    y += 5;
  }

  return y + 5;
}

export async function generateCartaPdf() {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  drawHeader(doc);

  let col = 0;
  let y = TOP_Y;

  for (const cat of carta) {
    if (y + estimateHeight(cat) > MAX_Y) {
      if (col === 0) {
        col = 1;
        y = TOP_Y;
      } else {
        doc.addPage();
        drawHeader(doc);
        col = 0;
        y = TOP_Y;
      }
    }
    y = drawCategory(doc, cat, COLS[col], y);
  }

  doc.save('carta-lattia.pdf');
}
