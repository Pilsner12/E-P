petr/
├── node_modules/              # Složka obsahující všechny závislosti nainstalované pomocí npm.
├── public/                    # Složka obsahující veřejné soubory, které neprochází přes Webpack.
│   ├── index.html             # Hlavní HTML soubor, který slouží jako šablona pro celou aplikaci.
│   ├── favicon.ico            # Ikona stránky, která se zobrazuje na kartě prohlížeče.
│   └── manifest.json          # Konfigurační soubor pro Progressive Web App (PWA).
├── src/                       # Hlavní složka obsahující všechny zdrojové soubory projektu.
│   ├── assets/                # Složka pro obrázky a styly.
│   │   ├── images/            # Složka pro obrázky.
│   │   │   ├── logo.png       # Příklad obrázku, obvykle loga aplikace.
│   │   │   └── ...            # Další obrázky.
│   │   ├── styles/            # Složka pro CSS soubory.
│   │   │   ├── main.css       # Hlavní CSS soubor obsahující globální styly aplikace.
│   │   │   └── ...            # Další styly.
│   ├── components/            # Složka pro React komponenty.
│   │   ├── App.js             # Hlavní komponenta aplikace.
│   │   ├── App.css            # Stylový soubor pro App komponentu.
│   │   ├── Header.js          # Komponenta pro hlavičku aplikace.
│   │   ├── Footer.js          # Komponenta pro patičku aplikace.
│   │   └── ...                # Další komponenty.
│   ├── contexts/              # Složka pro kontexty Reactu (React Context API).
│   │   ├── AuthContext.js     # Kontext pro autentizaci uživatelů.
│   │   └── ...                # Další kontexty.
│   ├── hooks/                 # Složka pro vlastní hooky (custom hooks).
│   │   ├── useAuth.js         # Příklad vlastního hooku pro autentizaci.
│   │   └── ...                # Další hooky.
│   ├── pages/                 # Složka pro jednotlivé stránky aplikace.
│   │   ├── Home.js            # Komponenta pro domovskou stránku.
│   │   ├── About.js           # Komponenta pro stránku "O nás".
│   │   └── ...                # Další stránky.
│   ├── services/              # Složka pro služby, jako jsou API volání.
│   │   ├── api.js             # Příklad služby pro API volání.
│   │   └── ...                # Další služby.
│   ├── utils/                 # Složka pro užitečné funkce a utility.
│   │   ├── helpers.js         # Příklad pomocné funkce.
│   │   └── ...                # Další užitečné funkce.
│   ├── App.js                 # Hlavní komponenta aplikace, která zajišťuje základní strukturu a logiku.
│   ├── App.test.js            # Testovací soubor pro App komponentu.
│   ├── index.js               # Vstupní bod aplikace, kde se provádí renderování React komponenty do DOM.
│   ├── index.css              # Globální styly pro aplikaci.
│   ├── reportWebVitals.js     # Soubor pro měření výkonu aplikace.
│   └── setupTests.js          # Konfigurační soubor pro testování.
├── .gitignore                 # Soubor určující soubory a složky, které mají být ignorovány verzovacím systémem Git.
├── package.json               # Soubor obsahující informace o projektu a závislostech.
├── package-lock.json          # Soubor zamykající verze balíčků nainstalovaných npm.
├── README.md                  # Soubor s dokumentací k projektu.
├── webpack.config.js          # Konfigurační soubor Webpacku (pokud používáte vlastní konfiguraci).
└── .env                       # Soubor pro environmentální proměnné.
