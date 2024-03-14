export default function Header({ isLoading }) {
  return (
    <header>
      <h1>
        <div className="first-blaster">🔫</div> Sıkıntı Giderici 3000
        {"\u00A0"}🔫
      </h1>
      {isLoading ? (
        <h3>Aktiviteler yükleniyor...</h3>
      ) : (
        <h3>Kaydedilen Aktivite Seçenekleri </h3>
      )}
    </header>
  );
}
