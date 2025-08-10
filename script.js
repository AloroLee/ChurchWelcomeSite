function toggleDropdown(bar) {
    const content = bar.nextElementSibling; 
    const isExpanded = bar.getAttribute('aria-expanded') === 'true';
  
    bar.setAttribute('aria-expanded', !isExpanded);
    content.style.display = isExpanded ? 'none' : 'block';
  
    const statusInfoRight = bar.querySelector('.status-info-right');
    const checkmarkIcon = statusInfoRight?.querySelector('.checkmark-icon');
    const statusText = statusInfoRight?.querySelector('.status-text');
  
    // Mark as complete only when expanding for the first time
    if (!isExpanded && checkmarkIcon && !checkmarkIcon.classList.contains('complete')) {
      checkmarkIcon.classList.add('complete');
      if (statusText) statusText.textContent = 'Complete';
    }
  }
  
