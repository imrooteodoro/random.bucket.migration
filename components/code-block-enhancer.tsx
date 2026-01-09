'use client';

import { useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function CodeBlockEnhancer() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Add line numbers and copy button to all code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach((block, blockIndex) => {
      // Skip if already processed
      if (block.parentElement?.classList.contains('line-numbers-processed')) {
        return;
      }

      const code = block as HTMLElement;
      const pre = code.parentElement;
      
      if (!pre) return;

      // Mark as processed
      pre.classList.add('line-numbers-processed');

      // Get the code text (plain text for copying)
      const text = code.textContent || '';
      const lines = text.split('\n');
      
      // Remove last empty line if exists
      if (lines[lines.length - 1].trim() === '') {
        lines.pop();
      }

      // Create wrapper for the entire code block
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';

      // Create line numbers wrapper
      const lineNumbersWrapper = document.createElement('div');
      lineNumbersWrapper.className = 'line-numbers';
      lineNumbersWrapper.setAttribute('aria-hidden', 'true');

      // Generate line numbers
      lines.forEach((line, index) => {
        const lineNumber = document.createElement('span');
        lineNumber.className = 'line-number';
        lineNumber.textContent = (index + 1).toString();
        lineNumbersWrapper.appendChild(lineNumber);
      });

      // Create code content wrapper (preserving syntax highlighting)
      const codeWrapper = document.createElement('div');
      codeWrapper.className = 'code-content';
      codeWrapper.innerHTML = code.innerHTML; // Preserve highlighted HTML

      // Create copy button
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-code-button';
      copyButton.setAttribute('data-block-index', blockIndex.toString());
      copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
      copyButton.title = 'Copy code';
      
      copyButton.addEventListener('click', async () => {
        await navigator.clipboard.writeText(text);
        copyButton.classList.add('copied');
        copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
        
        setTimeout(() => {
          copyButton.classList.remove('copied');
          copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
        }, 2000);
      });

      // Replace code content
      code.innerHTML = '';
      wrapper.appendChild(lineNumbersWrapper);
      wrapper.appendChild(codeWrapper);
      code.appendChild(wrapper);
      pre.appendChild(copyButton);
    });
  }, []);

  return null;
}
