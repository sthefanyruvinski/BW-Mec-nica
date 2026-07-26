import bcrypt from "bcryptjs";

const password = process.argv[2];
if (!password) {
  console.error("Uso: npm run hash-password -- <senha>");
  process.exit(1);
}

bcrypt.hash(password, 10).then((hash) => {
  console.log(hash);
  console.log(
    "\nColoque em ADMIN_PASSWORD_HASH no .env (troque cada $ por \\$, o Next.js expande $ em arquivos .env):"
  );
  console.log(hash.replaceAll("$", "\\$"));
});
