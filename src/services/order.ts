import IOrder from 'interfaces/models/order';
import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import { Observable } from 'rxjs';

import apiService, { ApiService } from './api';

export class OrderService {
  constructor(private apiService: ApiService) {}

  public list(params: IPaginationParams): Observable<IPaginationResponse<IOrder>> {
    return this.apiService.get('app/order', params);
  }

  public current(): Observable<IOrder> {
    return this.apiService.get('app/order/current');
  }

  public save(model: Partial<IOrder>): Observable<IOrder> {
    return this.apiService.post('app/order', model);
  }

  public delete(id: number): Observable<void> {
    return this.apiService.delete(`app/order/${id}`);
  }
}

const orderService = new OrderService(apiService);
export default orderService;
