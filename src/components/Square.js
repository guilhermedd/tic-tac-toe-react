import '../App.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
export default function Square({index}) {
  return <button className="square">{index}</button>;
}