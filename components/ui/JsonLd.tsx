export function JsonLd({data}: {data: object}) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is data we build ourselves — never model output.
      dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
    />
  );
}
