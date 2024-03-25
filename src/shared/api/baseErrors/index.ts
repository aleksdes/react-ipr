import { IBaseApiErrors } from '@/shared/api/baseErrors/types.ts';

export function createBaseApiErrors(name: string): IBaseApiErrors {
  return {
    getList: createApiErrorGetList(name),
    getById: createApiErrorGetById(name),
    updateById: createApiErrorUpdateById(name),
  };
}

export function createApiErrorGetList(name: string) {
  return `Failed to get ${name} list`;
}
export function createApiErrorGetById(name: string) {
  return `Failed to load ${name}`;
}
export function createApiErrorUpdateById(name: string) {
  return `Failed to update ${name}`;
}
