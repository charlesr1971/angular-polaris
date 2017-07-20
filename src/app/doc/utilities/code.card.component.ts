import { Component, Input } from '@angular/core';
@Component({
    selector: 'codeCard',
    template: `<plrsCard sectioned title="Angular Code">
        <pre><code>{{ code }}</code></pre>
    </plrsCard>`,
    styles: [
        "plrscard {margin-top: 2rem;}",
        "pre {overflow: auto;}"
    ]
})
export class CodeCardComponent {
    @Input() public code = '';
}