export class Employee {
  skill: Skill[];
  constructor(public firstName: string, public lastName: string, public email: string, public contact: string) {}
}

export class Skill {
  id: string;
  name: string;
}
