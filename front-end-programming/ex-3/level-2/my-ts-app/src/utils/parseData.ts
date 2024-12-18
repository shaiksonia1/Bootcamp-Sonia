export function parseStudentData(rawData: any[]): any[] {
    return rawData.map((item: any) => ({
      name: item['Name'],
      age: item['Age'],
      grade: item['Grade'],
    }));
  }
  