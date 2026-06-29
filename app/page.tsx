export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "4rem 2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "1rem" }}>
        Prismic is connected!
      </h1>
      <p style={{ marginBottom: "1rem", color: "#555" }}>
        Your Next.js project is wired up to the <strong>javi-test</strong> Prismic repository.
      </p>
      <ul style={{ lineHeight: 2, paddingLeft: "1.25rem" }}>
        <li>
          Run <code>pnpm slicemachine</code> to open Slice Machine, log in, and push your <em>Page</em> type and <em>Hero</em> slice.
        </li>
        <li>
          Create a Page document in the Prismic editor and give it a UID (e.g. <code>home</code>).
        </li>
        <li>
          Visit <a href="/home" style={{ color: "#16745f" }}>/home</a> (or whatever UID you chose) to see the page.
        </li>
        <li>
          Preview slices in isolation at{" "}
          <a href="/slice-simulator" style={{ color: "#16745f" }}>/slice-simulator</a>.
        </li>
      </ul>
    </main>
  );
}
