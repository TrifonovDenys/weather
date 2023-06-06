export function createMarcup({
  current: { temp_c, last_updated },
  location: { region, country, localtime },
}) {
  const a = `
  <h2>Region: ${region}</h2>
  <p>Country: ${country}</p>
  <p>Time: ${localtime}</p>
  <p>Temperature: ${temp_c}</p>
  <p>Udpdated: ${last_updated}</p>`;
  console.log(a);
  return a;
}
