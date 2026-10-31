import type { ArticleContent } from "../ArticleParts";
import { doterraDrinkable } from "./DoterraDrinkable";
import { noDiffuser } from "./NoDiffuser";
import { diffuserGuide } from "./DiffuserGuide";
import { diffuserBlends } from "./DiffuserBlends";
import { dropCount } from "./DropCount";
import { carrierOilDilution } from "./CarrierOilDilution";
import { oilContainers } from "./OilContainers";
import { bathOils } from "./BathOils";
import { footSelfMassage } from "./FootSelfMassage";
import { aromatouchTechnique } from "./AromatouchTechnique";
import { aromatouchHand } from "./AromatouchHand";
import { blendBasics } from "./BlendBasics";
import { oilsByScene } from "./OilsByScene";
import { lavender } from "./Lavender";
import { lemon } from "./Lemon";
import { peppermint } from "./Peppermint";
import { frankincense } from "./Frankincense";
import { teaTree } from "./TeaTree";
import { orange } from "./Orange";
import { eucalyptus } from "./Eucalyptus";
import { hinoki } from "./Hinoki";
import { geranium } from "./Geranium";
import { bergamot } from "./Bergamot";
import { onGuard } from "./OnGuard";
import { serenity } from "./Serenity";
import { balance } from "./Balance";
import { bathBomb } from "./BathBomb";
import { aromaLip } from "./AromaLip";
import { handmadeCream } from "./HandmadeCream";
import { rollOn } from "./RollOn";
import { gemSoap } from "./GemSoap";
import { naturalPerfume } from "./NaturalPerfume";
import { outdoorSpray } from "./OutdoorSpray";
import { cleaningSpray } from "./CleaningSpray";
import { laundryOils } from "./LaundryOils";
import { potpourri } from "./Potpourri";
import { aromaticTable } from "./AromaticTable";
import { aromaSausage } from "./AromaSausage";
import { whatIsEssentialOil } from "./WhatIsEssentialOil";
import { coImpactSourcing } from "./CoImpactSourcing";
import { oilStorage } from "./OilStorage";
import { kidsSafety } from "./KidsSafety";
import { petsSafety } from "./PetsSafety";

/** 本文がある記事（slug → 本文）。ここにない記事は「準備中」と表示する */
export const articles: Record<string, ArticleContent> = {
  "doterra-drinkable": doterraDrinkable,
  "no-diffuser": noDiffuser,
  "diffuser-guide": diffuserGuide,
  "diffuser-blends": diffuserBlends,
  "drop-count": dropCount,
  "carrier-oil-dilution": carrierOilDilution,
  "oil-containers": oilContainers,
  "bath-oils": bathOils,
  "foot-self-massage": footSelfMassage,
  "aromatouch-technique": aromatouchTechnique,
  "aromatouch-hand": aromatouchHand,
  "blend-basics": blendBasics,
  "oils-by-scene": oilsByScene,
  "lavender": lavender,
  "lemon": lemon,
  "peppermint": peppermint,
  "frankincense": frankincense,
  "tea-tree": teaTree,
  "orange": orange,
  "eucalyptus": eucalyptus,
  "hinoki": hinoki,
  "geranium": geranium,
  "bergamot": bergamot,
  "on-guard": onGuard,
  "serenity": serenity,
  "balance": balance,
  "bath-bomb": bathBomb,
  "aroma-lip": aromaLip,
  "handmade-cream": handmadeCream,
  "roll-on": rollOn,
  "gem-soap": gemSoap,
  "natural-perfume": naturalPerfume,
  "outdoor-spray": outdoorSpray,
  "cleaning-spray": cleaningSpray,
  "laundry-oils": laundryOils,
  "potpourri": potpourri,
  "aromatic-table": aromaticTable,
  "aroma-sausage": aromaSausage,
  "what-is-essential-oil": whatIsEssentialOil,
  "co-impact-sourcing": coImpactSourcing,
  "oil-storage": oilStorage,
  "kids-safety": kidsSafety,
  "pets-safety": petsSafety,
};
