interface KeyValueObject {
  [key: string]: any;
}

export function addKeyValue(obj: KeyValueObject, key: string, value: any) {
  obj[key] = value;
  return obj;
}
