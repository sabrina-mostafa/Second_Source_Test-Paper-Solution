### Controlled and Uncontrolled Component:
- A controlled component is a form element such as: <input>, <textarea>, <select> whose value is controlled by React state. The component’s data is stored in the component’s state and is updated using state management, useState or setState. The input value is always in sync with the state, making it the single source of truth.
<br/>
On the other hand, an uncontrolled component is more like a free spirit. It manages its own state internally without involving React state. Data is accessed only when needed, typically using a ref.
<br/>
In summary, controlled components provide more control and data synchronization, while uncontrolled components offer simplicity, speed, and minimalism.

