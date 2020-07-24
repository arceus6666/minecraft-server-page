import { IItem } from './item.interface';
import { IFile } from './file.interface';

export interface ApiResponse {
  status: number;
  error: any | null;
  data: IItem | Array<IItem> | IFile | Array<IFile> | string | null;
}
