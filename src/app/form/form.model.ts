export interface Form {
  id: string;
  suggest: string;
  content: string;
  raffle: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  tel: string;
  email: string;
  dateOfBirth: string;
  student: boolean;
  location: boolean;
  campus: boolean;
  atmosphere: boolean;
  dormroom: boolean;
  sports: boolean;
  intrested: string;

  // personalInfo: {
  //   firstName: string;
  //   lastName: string;
  //   dateOfBirth: string;
  // };
  // address: {
  //   street: string;
  //   city: string;
  //   state: string;
  //   zip: string;
  //   tel: string;
  //   email: string;
  // };
  // liked: {
  //   student: boolean;
  //   location: boolean;
  //   campus: boolean;
  //   atmosphere: boolean;
  //   dormroom: boolean;
  //   sports: boolean;
  // };
}
