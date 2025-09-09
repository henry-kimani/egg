import type { StarlightUserConfig } from '@astrojs/starlight/types';
import { group } from './config/sidebar';

/* the utility function `group()` provides the labels from type inference. The
 * labels from the inference are defined separately*/

export const sidebar = [
  group("start", {
    items: [ '',
      group("docs", { autogenerate: { directory: "docs", collapsed: true } })
    ],
  }),
  group("year1", {
    items: [
      group("one.ccs100", { autogenerate: { directory: 'year1/ccs100' } }),
      group("one.ccs102", { autogenerate: { directory: 'year1/ccs102' } }),
      group("one.ccs103", { autogenerate: { directory: 'year1/ccs103' } }),
      group("one.ccs104", { autogenerate: { directory: 'year1/ccs104' } }),
      group("one.ccs105", { autogenerate: { directory: 'year1/ccs105' } }),
      group("one.ccs106", { autogenerate: { directory: 'year1/ccs106' } }),
      group("one.ccs108", { autogenerate: { directory: 'year1/ccs108' } }),
    ]
  }),
  group("year2", {
    items: [
      group("two.ccs200", { autogenerate: { directory: 'year2/ccs200' } }),
      group("two.ccs201", { autogenerate: { directory: 'year2/ccs201' } }),
      group("two.ccs202", { autogenerate: { directory: 'year2/ccs202' } }),
      group("two.ccs203", { autogenerate: { directory: 'year2/ccs203' } }),
      group("two.ccs204", { autogenerate: { directory: 'year2/ccs204' } }),
      group("two.ccs205", { autogenerate: { directory: 'year2/ccs205' } }),
      group("two.ccs206", { autogenerate: { directory: 'year2/ccs206' } }),
      group("two.ccs207", { autogenerate: { directory: 'year2/ccs207' } }),
      group("two.ccs208", { autogenerate: { directory: 'year2/ccs208' } }),
      group("two.ams209", { autogenerate: { directory: 'year2/ams209' } }),
    ]
  }),
  group("year3", {
    items: [
      group("three.ccs300", { autogenerate: { directory: 'year3/ccs300'} }),
      group("three.ccs301", { autogenerate: { directory: 'year3/ccs301' } }),
      group("three.ccs302", { autogenerate: { directory: 'year3/ccs302' } }),
      group("three.ccs314", { autogenerate: { directory: 'year3/ccs314' } }),
      group("three.sit312", { autogenerate: { directory: 'year3/sit312' } })
    ]
  })
] satisfies StarlightUserConfig['sidebar'];
