// function toggleDropdown(bar) {
//     const content = bar.nextElementSibling; // This assumes dropdown-content is always the direct sibling
//     const isExpanded = bar.getAttribute('aria-expanded') === 'true';

//     // Toggle dropdown visibility
//     if (isExpanded) {
//         content.style.display = 'none';
//         bar.setAttribute('aria-expanded', 'false');
//     } else {
//         content.style.display = 'block';
//         bar.setAttribute('aria-expanded', 'true');
//     }

//     // Update the checkmark and status text if not already complete
//     // We target the checkmark within the new .status-info-right container
//     const statusInfoRight = bar.querySelector('.status-info-right');
//     const checkmarkIcon = statusInfoRight ? statusInfoRight.querySelector('.checkmark-icon') : null;
//     const statusText = statusInfoRight ? statusInfoRight.querySelector('.status-text') : null;


//     if (!isExpanded && checkmarkIcon) { // If it's being expanded
//         if (!checkmarkIcon.classList.contains('complete')) {
//             checkmarkIcon.classList.add('complete');
//         }
//         if (statusText) {
//             statusText.textContent = 'Complete';
//         }
//     }
// }
function toggleDropdown(bar) {
    const content = bar.nextElementSibling; // Assumes .dropdown-content directly follows .dropdown
    const isExpanded = bar.getAttribute('aria-expanded') === 'true';
  
    // Toggle visibility and aria-expanded state
    bar.setAttribute('aria-expanded', !isExpanded);
    content.style.display = isExpanded ? 'none' : 'block';
  
    // Access status section
    const statusInfoRight = bar.querySelector('.status-info-right');
    const checkmarkIcon = statusInfoRight?.querySelector('.checkmark-icon');
    const statusText = statusInfoRight?.querySelector('.status-text');
  
    // Mark as complete only when expanding for the first time
    if (!isExpanded && checkmarkIcon && !checkmarkIcon.classList.contains('complete')) {
      checkmarkIcon.classList.add('complete');
      if (statusText) statusText.textContent = 'Complete';
    }
  }
  