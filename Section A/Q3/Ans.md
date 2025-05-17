## What is z-index?
- z-index is a CSS property that controls the stacking order of elements along the z-axis(depth). It determines which elements appear in front or behind other elements. **It only works on elements with a positioning property**.

## Common Real-World Use Case of z-index:
### Overlay/Modal Popup in Web Applications
- A very common use case of z-index is when creating a modal popup that overlays the entire page while keeping certain elements like a navbar or background content accessible.

### Scenario:
Imagine we are on a shopping website. We clicked on a "View Cart" button, and a popup modal appears on the screen. The modal contains cart details and a close button. The main content should be visually pushed to the background. The modal overlay should appear on top of the content, partially dimming the background. The modal box itself should be on top of the overlay to ensure that the cart details are fully visible and interactive.