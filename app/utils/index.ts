export default function formatDate(input: string | number | Date) {
    const date = new Date(input);  // Parse the input string into a Date object
  
    // Define the months array to get the full month name
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    // Get the day, month, and year from the Date object
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    // Format the date as "Day Month Year"
    return `${day} ${month} ${year}`;
  }
  
  // Example usage:
  const inputDate = "2024-10-28T07:09:06.051";
  console.log(formatDate(inputDate));  // Output: "28 October 2024"
  