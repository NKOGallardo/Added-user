import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Header from './Header/header';
import Dropdown from './Dropdown/dropdown';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Dropdown />
  </StrictMode>,
)
