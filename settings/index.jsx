function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="left">Coins</Text>}>
        <Text>You can change here your favourite coins, which should be displayed on your watch in the app.</Text>
        <Select
          label={`Coin 1`}
          settingsKey="coin_one"
          options={[
            {name:"BTC"},
            {name:"ETH"},
            {name:"LTC"},
            {name:"BCH"},
            {name:"XRP"},
            {name:"SNT"},
            {name:"MIOTA"},
            {name:"ADA"},
            {name:"NEO"},
            {name:"XEM"},
            {name:"XLM"},
            {name:"EOS"},
            {name:"DASH"},
            {name:"XMR"},
            {name:"TRX"},
            {name:"BTG"},
            {name:"ETC"},
            {name:"NANO"},
            {name:"LSK"},
            {name:"ETN"},
            {name:"BAR"}
          ]}
        />
        <Select
          label={`Coin 2`}
          settingsKey="coin_two"
          options={[
            {name:"BTC"},
            {name:"ETH"},
            {name:"LTC"},
            {name:"BCH"},
            {name:"XRP"},
            {name:"SNT"},
            {name:"MIOTA"},
            {name:"ADA"},
            {name:"NEO"},
            {name:"XEM"},
            {name:"XLM"},
            {name:"EOS"},
            {name:"DASH"},
            {name:"XMR"},
            {name:"TRX"},
            {name:"BTG"},
            {name:"ETC"},
            {name:"NANO"},
            {name:"LSK"},
            {name:"ETN"},
            {name:"BAR"}
          ]}
        />
        <Select
          label={`Coin 3`}
          settingsKey="coin_three"
          options={[
            {name:"BTC"},
            {name:"ETH"},
            {name:"LTC"},
            {name:"BCH"},
            {name:"XRP"},
            {name:"SNT"},
            {name:"MIOTA"},
            {name:"ADA"},
            {name:"NEO"},
            {name:"XEM"},
            {name:"XLM"},
            {name:"EOS"},
            {name:"DASH"},
            {name:"XMR"},
            {name:"TRX"},
            {name:"BTG"},
            {name:"ETC"},
            {name:"NANO"},
            {name:"LSK"},
            {name:"ETN"},
            {name:"BAR"}
          ]}
        />
        <Text>Currently, the app will sort the coins based on their rank on CoinMarketCap.</Text>
      </Section>
      <Section title={<Text bold align="left">Credits</Text>}>
        <Text>Creator: <Link source="https://www.schmuckli.net/">Julian Schmuckli</Link></Text>
        <Text>If you want to donate: <Link source="https://www.schmuckli.net/donations">Donate here</Link></Text>
      </Section>
      <Section title={<Text bold align="left">Sources & Licenses</Text>}>
        <Text>Icons made by <Link source="https://www.flaticon.com/authors/smashicons">Smashicons</Link> from <Link source="https://www.flaticon.com/">www.flaticon.com</Link> is licensed by <Link source="http://creativecommons.org/licenses/by/3.0/">CC 3.0 BY</Link></Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
