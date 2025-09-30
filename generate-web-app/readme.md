# Generate Web Apps from CSV

This project automatically creates multiple React apps from a single template, using data stored in a CSV file.

---

## How it works

1. You prepare a CSV file (`websites.csv`) with website details like **title, phone, address**.
2. The script (`generator.js`) reads the CSV file.
3. For each row in the CSV:
   - Copies the React template from `react-template/`
   - Creates a new app inside the `build/` folder
   - Updates placeholders in `index.html` and `src/App.jsx` with the correct data

---

## Project structure

```
├── generator.js # Main script
├── websites.csv # Input CSV with websites data
├── react-template/ # Base React template (with placeholders)
└── build/ # Generated apps (output folder)
```

---

## Example CSV

```csv
domain,title,description,phone,address
foodexpress.com,Food Express,Delicious meals delivered fast,01712345678,"House 12, Road 5, Banani, Dhaka"
techhubbd.com,Tech Hub BD,Your trusted tech partner,01898765432,"Level 4, Block B, Dhanmondi, Dhaka"
bookbazaar.com,Book Bazaar,Buy and sell books online,01911223344,"Shop 22, New Market, Chittagong"
```

## How to run

1. Install dependencies:

```
npm install
```

2. Run the generator:

```
npm start
```
