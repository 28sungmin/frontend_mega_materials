export type objType = {
  name: string;
  age: number;
  region?: string | undefined;
};

//복합객체(객체 내부의 객체 형태)
interface memListType {
  id: string;
  name: string;
  age: number;
}
export type memberListsType = {
  member: memListType;
  level: string;
};
