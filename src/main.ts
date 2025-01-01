import { Observable, of, fromEvent, interval } from 'rxjs';
import { map, filter, debounceTime, take } from 'rxjs/operators';
import './styles/main.scss';

// 基本的なメッセージストリーム
const message$: Observable<string> = of('Hello, PWA with RxJS!');

// メッセージの処理
message$
  .pipe(
    map((text) => text.toUpperCase()),
    filter((text) => text.includes('PWA'))
  )
  .subscribe({
    next: (value) => console.log('Received:', value),
    error: (error) => console.error('Error:', error),
    complete: () => console.log('Complete'),
  });

// クリックイベントの監視例
const clicks$ = fromEvent(document, 'click').pipe(
  debounceTime(1000) // クリックのデバウンス処理
);

clicks$.subscribe(() => {
  console.log('Document clicked');
});

// インターバルタイマーの例
const timer$ = interval(1000).pipe(
  take(5) // 5回だけ実行
);

timer$.subscribe({
  next: (count) => console.log(`Timer: ${count}`),
  complete: () => console.log('Timer completed'),
});

// PWAのメイン処理
console.log('PWA application started');

// Service Workerの状態監視
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then((registration) => {
    console.log('Service Worker is ready:', registration.scope);
  });

  // Service Workerのメッセージ監視
  navigator.serviceWorker.addEventListener('message', (event) => {
    console.log('Received message from Service Worker:', event.data);
  });
}
