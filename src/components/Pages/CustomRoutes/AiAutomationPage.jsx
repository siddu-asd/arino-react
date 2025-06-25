import React, { useEffect, useRef } from 'react';
import ServicesPage from '../ServicesPage';

export default function AiAutomationPage() {
  // Optionally, you can add logic here to scroll to the AI & Technology section if ServicesPage supports it
  return <ServicesPage focusService="ai-technology" />;
} 