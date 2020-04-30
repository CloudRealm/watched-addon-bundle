import * as i18n from "@watchedcom/i18n";
import { BundleAddon, createBundleAddon, translateDeep } from "@watchedcom/sdk";

export default (async () => {
  await i18n.init(["en", "de", "fr", "tr"], {
    lng: "en",
    defaultNS: "bundles",
    ns: ["bundles"],
  });
  return [
    createBundleAddon(
      translateDeep(
        <Partial<BundleAddon>>{
          id: "empty-bundle",
          name: "i18n:Empty Bundle",
          description:
            "i18n:This bundle will remove all currently installed addons and dashboards.",
          version: "1.0.2",
          icon: "https://watched.com/favicon.ico",
          requirements: ["internal/notfound"],
          flags: {
            devModeOnly: true,
          },
        },
        i18n.tAll,
        "empty"
      )
    ),
    createBundleAddon(
      translateDeep(
        <BundleAddon>{
          id: "watched-bundle",
          name: "WATCHED Bundle",
          description:
            "i18n:The default WATCHED bundle with a preselection of some nice addons and dashboards.",
          version: "1.0.5",
          icon: "https://watched.com/favicon.ico",
          requirements: [
            {
              id: "watched-repository",
              url: "https://addons.watched.com",
            },
            "tmdb",
            "mixer.com",
            "watchup",
            "opensubtitles.org",
            "internal/epgdb",
            "twitch",
          ],
          dashboards: [
            {
              addonId: "watched/tmdb",
              rootId: "series",
              id: "series/trending",
            },
            {
              addonId: "watched/tmdb",
              rootId: "series",
              id: "series/popular",
            },
            {
              addonId: "watched/tmdb",
              rootId: "movie",
              id: "movie/trending",
            },
            {
              addonId: "watched/tmdb",
              rootId: "movie",
              id: "movie/popular",
            },
            {
              addonId: "watched/mixer.com",
              id: "games",
            },
            {
              addonId: "watched/mixer.com",
              id: "",
            },
          ],
        },
        i18n.tAll,
        "watched"
      )
    ),
  ];
})();
