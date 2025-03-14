export interface PersonInter {
    name: string,
    age: number,
    sex: string,
    x?: number
}

//一个自定义类型
// export type persons = Array<PersonInter>
export type persons = PersonInter[]