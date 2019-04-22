import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'local_weight';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeOnLocalStorage(weight: string): void {
    const currentWeights = this.storage.get(STORAGE_KEY) || [];
    currentWeights.push({
      weight: weight
    });

    this.storage.set(STORAGE_KEY, currentWeights);
    console.log(this.storage.get(STORAGE_KEY) || 'Local storage empty');
  }

  public getLocalStorage(): string{
    console.log(this.storage.get(STORAGE_KEY) || 'Local storage empty');
    return (this.storage.get(STORAGE_KEY) || 'Nothing in storage')
  }
}
