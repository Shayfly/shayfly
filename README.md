# ShayFly - מנוע חיפוש טיסות ומלונות

ShayFly הוא פרויקט לדוגמה המדגים מנוע חיפוש דילים המשלב טיסות ומלונות בדומה לאתרים כמו Kayak ו‑Skyscanner. הפרויקט נבנה עם Next.js וכולל API צד שרת שמתווך ל‑API חיצוני (נדרש מפתח חיצוני).

## הפעלה מקומית

1. התקנת חבילות:
   ```bash
   cd frontend2
   npm install
   ```
2. יצירת קובץ `.env.local` עם משתנים:
   ```bash
   SEARCH_API_URL=https://api.travelpayouts.com/aviasales/v3/prices_for_dates
   SEARCH_API_KEY=<YOUR_TRAVELPAYOUTS_API_KEY>
   ```
3. הרצת סביבה לפיתוח:
   ```bash
   npm run dev
   ```

## בנייה והעלאה ל‑Vercel

הפרויקט מוכן לפריסה ב‑Vercel. לאחר הגדרת משתני הסביבה בפרויקט ב‑Vercel ניתן להריץ:

```bash
npm run build
```

ולפרוס את הספרייה `frontend2` כפרויקט Next.js.

