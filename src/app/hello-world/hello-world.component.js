import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
    selector: 'app-hello-world',
    imports: [],
    templateUrl: './hello-world.component.html',
    styleUrl: './hello-world.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloWorldComponent {
}
