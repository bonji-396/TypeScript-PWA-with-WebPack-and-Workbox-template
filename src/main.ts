import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import './styles/main.scss';

of('Hello, PWA with RxJS!')
  .pipe(
    map((text) => text.toUpperCase()),
    filter((text) => text.includes('PWA'))
  )
  .subscribe(console.log);
