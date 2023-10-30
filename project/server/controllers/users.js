async function getHomePage(req, res) {
  res.send(
    `"Auth API.\nPlease use POST /auth & POST /verify for authentication"`
  );
}
