import React from "react";
import ReactDOM from "react-dom/client";

/* 
  Header
    - Logo
    - Nav Items
  Body
   - Search
   - Restautant container
      - Reastaurant Card
         - Img
         - Name of Res, Star Rating, Cuisine, Delivery time
  - Footer
      -copyright
      -links
      -address
      - contact */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.card?.card?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.card.card.info.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        collectionId: "83639",
        title: "Biryani",
        description:
          "Taste these delectable classics, delectable biryanis to make your day.",
        imageId:
          "COLLECTIONS/IMAGES/MERCH/2025/3/7/6b765643-8f10-4176-b1f4-5e096d4182c0_biryani nv (3) (1).pngImage preview",
        aspectRatio: "3.44",
        cta: {
          link: "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani,biryani,ads_pc_biryani",
          type: "collectionv2",
        },
        type: "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        count: "214 restaurants",
      },
    },
  },
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        sortConfigs: [
          {
            key: "relevance",
            title: "Relevance (Default)",
            selected: true,
            defaultSelection: true,
          },
          {
            key: "deliveryTimeAsc",
            title: "Delivery Time",
          },
          {
            key: "modelBasedRatingDesc",
            title: "Rating",
          },
          {
            key: "costForTwoAsc",
            title: "Cost: Low to High",
          },
          {
            key: "costForTwoDesc",
            title: "Cost: High to Low",
          },
        ],
        restaurantCount: 214,
        facetList: [
          {
            label: "10 Mins Delivery",
            id: "isRestaurantBolt",
            selection: "SELECT_TYPE_SINGLESELECT",
            facetInfo: [
              {
                label: "10 Mins Delivery",
                id: "isRestaurantBoltfacetquery0",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_FLATTENED",
            subLabel: "Filterby",
            icon: "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.pngImage preview",
            selectedIcon:
              "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.pngImage preview",
          },
          {
            label: "Veg/Non-Veg",
            id: "isVeg",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Non Veg",
                id: "isVegfacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Pure Veg",
                id: "isVegfacetquery1",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filterby",
            openFilter: true,
          },
          {
            label: "Ratings",
            id: "rating",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Ratings",
                id: "ratingfacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Ratings 4.0+",
                id: "ratingfacetquery1",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Ratings 4.5+",
                id: "ratingfacetquery2",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filterby",
            openFilter: true,
          },
          {
            label: "Delivery Time",
            id: "deliveryTime",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Less than 30 mins",
                id: "deliveryTimefacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Less than 45 mins",
                id: "deliveryTimefacetquery1",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filterby",
            openFilter: true,
          },
          {
            label: "Cost For Two",
            id: "costForTwo",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Less than Rs. 300",
                id: "costForTwofacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Rs.300 - Rs.600",
                id: "costForTwofacetquery1",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Greater than Rs. 600",
                id: "costForTwofacetquery2",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filterby",
            openFilter: true,
          },
        ],
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        layout: {
          rows: 1,
          widgetPadding: {
            left: 16,
            right: 16,
          },
          scrollBar: {},
          widgetTheme: {
            defaultMode: {
              backgroundColour: "#FFFFFF",
              theme: "THEME_TYPE_LIGHT",
            },
            darkMode: {
              backgroundColour: "#1B3028",
              theme: "THEME_TYPE_DARK",
            },
          },
        },
        id: "restaurantCountWidget",
        gridElements: {
          infoWithStyle: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "214 Restaurants to explore",
            headerStyling: {
              textSize: 15,
              textColor: "text_color_highest_emphasis",
              textFontName: "FONT_NAME_HEADER_H5",
              maxLines: 1,
            },
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1022488",
          name: "Raju Gari Biryani",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/2/19/797c12af-4ec2-404b-a64f-65d344947e4a_5f697aa5-7590-417e-8ae0-a231fc8fadd2.jpegImage preview",
          locality: "Nallakunta & Vidyanagar",
          areaName: "Nallakunta & Vidyanagar",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani"],
          avgRating: 3.9,
          parentId: "165947",
          avgRatingString: "3.9",
          totalRatingsString: "3.0K+",
          promoted: true,
          adTrackingId:
            "cid=9bcaf340-8d82-4401-9730-3032757ce742~p=3~adgrpid=9bcaf340-8d82-4401-9730-3032757ce742#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1022488~plpr=COLLECTION~eid=f76e9c9b-c614-4c25-b52f-948ef9274988~srvts=1748549234641~collid=83639",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-30 03:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "9bcaf340-8d82-4401-9730-3032757ce742",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1022488&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "142670",
          name: "Shah Ghouse Hotel & Restaurant",
          cloudinaryImageId: "grqh1zb1kv8uhkmyercb",
          locality: "Santh Nirankari Satsang Bhavan",
          areaName: "Banjara Hills",
          costForTwo: "₹350 for two",
          cuisines: ["Biryani", "Chinese", "Tandoor", "Mughlai"],
          avgRating: 4.3,
          parentId: "19271",
          avgRatingString: "4.3",
          totalRatingsString: "75K+",
          sla: {
            deliveryTime: 16,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-05 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId:
                  "bolt/big%20rx%20listing%2015%20mins%20.pngImage preview",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Biryani.pngImage preview",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId:
                        "bolt/big%20rx%20listing%2015%20mins%20.pngImage preview",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Biryani.pngImage preview",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=142670&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "981938",
          name: "Dasara",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/11/4be1a3a4-835b-4a93-9f04-f06c00aa3ebb_ccce9795-55cd-4286-bc9d-26b867f6d729.jpegImage preview",
          locality: "ROAD NO. 10, NEAR JUBILEE WINE SPOT",
          areaName: "Jubilee Hills",
          costForTwo: "₹600 for two",
          cuisines: ["Andhra", "Biryani", "South Indian", "Kebabs"],
          avgRating: 4.1,
          parentId: "446638",
          avgRatingString: "4.1",
          totalRatingsString: "2.9K+",
          promoted: true,
          adTrackingId:
            "cid=f3762d5c-3ede-4ce6-ad6a-b6609f11c370~p=5~adgrpid=f3762d5c-3ede-4ce6-ad6a-b6609f11c370#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=981938~plpr=COLLECTION~eid=d997ce49-5b55-4f62-9783-437cf8f97434~srvts=1748549234641~collid=83639",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 8.6,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "8.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-30 05:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "f3762d5c-3ede-4ce6-ad6a-b6609f11c370",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=981938&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "840147",
          name: "Indian Darbar Restaurant",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/12/9f04135c-695a-4f53-9c90-86d2c2af2b4a_8affcc0f-5cea-4877-a0e9-4a898a5ae96d.jpegImage preview",
          locality: "Narayanaguda",
          areaName: "Narayanaguda",
          costForTwo: "₹600 for two",
          cuisines: [
            "Biryani",
            "Chinese",
            "North Indian",
            "Tandoor",
            "Seafood",
            "Fast Food",
          ],
          avgRating: 4,
          parentId: "571377",
          avgRatingString: "4.0",
          totalRatingsString: "1.8K+",
          sla: {
            deliveryTime: 15,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-30 08:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId:
                  "bolt/big%20rx%20listing%2015%20mins%20.pngImage preview",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId:
                        "bolt/big%20rx%20listing%2015%20mins%20.pngImage preview",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹200 OFF",
            subHeader: "ABOVE ₹499",
            discountTag: "FLAT DEAL",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.8",
              ratingCount: "548",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=840147&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "7224",
          name: "Santosh Dhaba Exclusive",
          cloudinaryImageId: "f4caeaf39d1bc99491ad884a6fad682e",
          locality: "Banjara Hills",
          areaName: "Banjara Hills",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "Chinese", "Italian"],
          avgRating: 4.3,
          veg: true,
          parentId: "8784",
          avgRatingString: "4.3",
          totalRatingsString: "79K+",
          promoted: true,
          adTrackingId:
            "cid=7d069fb4-3259-4a97-b722-acc71a9d1a1e~p=7~adgrpid=7d069fb4-3259-4a97-b722-acc71a9d1a1e#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=7224~plpr=COLLECTION~eid=2e599b3e-e827-4a56-b7f6-83ccbfeac0c0~srvts=1748549234641~collid=83639",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 4.1,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-30 03:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-North%20Indian.pngImage preview",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId:
                        "Rxawards/_CATEGORY-North%20Indian.pngImage preview",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.7",
              ratingCount: "2.1K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "7d069fb4-3259-4a97-b722-acc71a9d1a1e",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=7224&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "131870",
          name: "4M Biryani House",
          cloudinaryImageId: "805af0307dc1fc9218799b00bad9a025",
          locality: "Musheerabad",
          areaName: "Musheerabad",
          costForTwo: "₹250 for two",
          cuisines: ["Biryani", "Tandoor", "Chinese"],
          avgRating: 4.4,
          parentId: "19646",
          avgRatingString: "4.4",
          totalRatingsString: "86K+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-30 05:55:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "7.1K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=131870&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "100942",
          name: "Lucky Multicuisine Restaurant",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/6/5c3faa19-6db8-4839-a2b6-33b2645fec61_f161696d-a419-49eb-9ac0-95e2496aae0c.jpegImage preview",
          locality: "Somajiguda",
          areaName: "Somajiguda",
          costForTwo: "₹350 for two",
          cuisines: ["Biryani", "Tandoor", "South Indian"],
          avgRating: 4.1,
          parentId: "18963",
          avgRatingString: "4.1",
          totalRatingsString: "62K+",
          promoted: true,
          adTrackingId:
            "cid=2578b13e-2b4e-4ea0-bbd0-7d993dec808b~p=8~adgrpid=2578b13e-2b4e-4ea0-bbd0-7d993dec808b#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=100942~plpr=COLLECTION~eid=837ef4d2-31f2-4f97-88d8-afce309e50da~srvts=1748549234641~collid=83639",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 4.5,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "4.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-30 02:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "4.5K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "2578b13e-2b4e-4ea0-bbd0-7d993dec808b",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=100942&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} /> */}

        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
