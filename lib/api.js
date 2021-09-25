export async function getAllContent() {
  const response = await fetch(
    "https://drive.google.com/uc?export=download&id=1xobYWPQvumZVa3leB8MFjKmY7A5Q0rRU"
  );
  return response.json();
}
