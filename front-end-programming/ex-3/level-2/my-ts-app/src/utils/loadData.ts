import Papa from 'papaparse';

export function loadCSV(file: File): Promise<any[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (result) => resolve(result.data),
      error: (error) => reject(error),
    });
  });
}
