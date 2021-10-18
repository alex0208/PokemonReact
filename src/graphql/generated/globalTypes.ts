/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * column ordering options
 */
export enum order_by {
  asc = "asc",
  asc_nulls_first = "asc_nulls_first",
  asc_nulls_last = "asc_nulls_last",
  desc = "desc",
  desc_nulls_first = "desc_nulls_first",
  desc_nulls_last = "desc_nulls_last",
}

/**
 * order by aggregate values of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_aggregate_order_by {
  avg?: pokemon_v2_ability_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_ability_max_order_by | null;
  min?: pokemon_v2_ability_min_order_by | null;
  stddev?: pokemon_v2_ability_stddev_order_by | null;
  stddev_pop?: pokemon_v2_ability_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_ability_stddev_samp_order_by | null;
  sum?: pokemon_v2_ability_sum_order_by | null;
  var_pop?: pokemon_v2_ability_var_pop_order_by | null;
  var_samp?: pokemon_v2_ability_var_samp_order_by | null;
  variance?: pokemon_v2_ability_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_avg_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_max_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_min_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_stddev_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_stddev_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_stddev_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_sum_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_var_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_var_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_variance_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_aggregate_order_by {
  avg?: pokemon_v2_berry_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_berry_max_order_by | null;
  min?: pokemon_v2_berry_min_order_by | null;
  stddev?: pokemon_v2_berry_stddev_order_by | null;
  stddev_pop?: pokemon_v2_berry_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_berry_stddev_samp_order_by | null;
  sum?: pokemon_v2_berry_sum_order_by | null;
  var_pop?: pokemon_v2_berry_var_pop_order_by | null;
  var_samp?: pokemon_v2_berry_var_samp_order_by | null;
  variance?: pokemon_v2_berry_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_avg_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_max_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  name?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_min_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  name?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_stddev_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_stddev_pop_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_stddev_samp_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_sum_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_var_pop_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_var_samp_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_variance_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_encounter"
 */
export interface pokemon_v2_encounter_aggregate_order_by {
  avg?: pokemon_v2_encounter_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_encounter_max_order_by | null;
  min?: pokemon_v2_encounter_min_order_by | null;
  stddev?: pokemon_v2_encounter_stddev_order_by | null;
  stddev_pop?: pokemon_v2_encounter_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_encounter_stddev_samp_order_by | null;
  sum?: pokemon_v2_encounter_sum_order_by | null;
  var_pop?: pokemon_v2_encounter_var_pop_order_by | null;
  var_samp?: pokemon_v2_encounter_var_samp_order_by | null;
  variance?: pokemon_v2_encounter_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_encounter"
 */
export interface pokemon_v2_encounter_avg_order_by {
  encounter_slot_id?: order_by | null;
  id?: order_by | null;
  location_area_id?: order_by | null;
  max_level?: order_by | null;
  min_level?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_encounter"
 */
export interface pokemon_v2_encounter_max_order_by {
  encounter_slot_id?: order_by | null;
  id?: order_by | null;
  location_area_id?: order_by | null;
  max_level?: order_by | null;
  min_level?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_encounter"
 */
export interface pokemon_v2_encounter_min_order_by {
  encounter_slot_id?: order_by | null;
  id?: order_by | null;
  location_area_id?: order_by | null;
  max_level?: order_by | null;
  min_level?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_encounter"
 */
export interface pokemon_v2_encounter_stddev_order_by {
  encounter_slot_id?: order_by | null;
  id?: order_by | null;
  location_area_id?: order_by | null;
  max_level?: order_by | null;
  min_level?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_encounter"
 */
export interface pokemon_v2_encounter_stddev_pop_order_by {
  encounter_slot_id?: order_by | null;
  id?: order_by | null;
  location_area_id?: order_by | null;
  max_level?: order_by | null;
  min_level?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_encounter"
 */
export interface pokemon_v2_encounter_stddev_samp_order_by {
  encounter_slot_id?: order_by | null;
  id?: order_by | null;
  location_area_id?: order_by | null;
  max_level?: order_by | null;
  min_level?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_encounter"
 */
export interface pokemon_v2_encounter_sum_order_by {
  encounter_slot_id?: order_by | null;
  id?: order_by | null;
  location_area_id?: order_by | null;
  max_level?: order_by | null;
  min_level?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_encounter"
 */
export interface pokemon_v2_encounter_var_pop_order_by {
  encounter_slot_id?: order_by | null;
  id?: order_by | null;
  location_area_id?: order_by | null;
  max_level?: order_by | null;
  min_level?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_encounter"
 */
export interface pokemon_v2_encounter_var_samp_order_by {
  encounter_slot_id?: order_by | null;
  id?: order_by | null;
  location_area_id?: order_by | null;
  max_level?: order_by | null;
  min_level?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_encounter"
 */
export interface pokemon_v2_encounter_variance_order_by {
  encounter_slot_id?: order_by | null;
  id?: order_by | null;
  location_area_id?: order_by | null;
  max_level?: order_by | null;
  min_level?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_aggregate_order_by {
  avg?: pokemon_v2_evolutionchain_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_evolutionchain_max_order_by | null;
  min?: pokemon_v2_evolutionchain_min_order_by | null;
  stddev?: pokemon_v2_evolutionchain_stddev_order_by | null;
  stddev_pop?: pokemon_v2_evolutionchain_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_evolutionchain_stddev_samp_order_by | null;
  sum?: pokemon_v2_evolutionchain_sum_order_by | null;
  var_pop?: pokemon_v2_evolutionchain_var_pop_order_by | null;
  var_samp?: pokemon_v2_evolutionchain_var_samp_order_by | null;
  variance?: pokemon_v2_evolutionchain_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_avg_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_max_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_min_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_evolutionchain".
 */
export interface pokemon_v2_evolutionchain_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
  pokemon_v2_item?: pokemon_v2_item_order_by | null;
  pokemon_v2_pokemonspecies_aggregate?: pokemon_v2_pokemonspecies_aggregate_order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_stddev_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_stddev_pop_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_stddev_samp_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_sum_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_var_pop_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_var_samp_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_variance_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_aggregate_order_by {
  avg?: pokemon_v2_experience_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_experience_max_order_by | null;
  min?: pokemon_v2_experience_min_order_by | null;
  stddev?: pokemon_v2_experience_stddev_order_by | null;
  stddev_pop?: pokemon_v2_experience_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_experience_stddev_samp_order_by | null;
  sum?: pokemon_v2_experience_sum_order_by | null;
  var_pop?: pokemon_v2_experience_var_pop_order_by | null;
  var_samp?: pokemon_v2_experience_var_samp_order_by | null;
  variance?: pokemon_v2_experience_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_avg_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_max_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_min_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_stddev_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_stddev_pop_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_stddev_samp_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_sum_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_var_pop_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_var_samp_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_variance_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_aggregate_order_by {
  avg?: pokemon_v2_generation_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_generation_max_order_by | null;
  min?: pokemon_v2_generation_min_order_by | null;
  stddev?: pokemon_v2_generation_stddev_order_by | null;
  stddev_pop?: pokemon_v2_generation_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_generation_stddev_samp_order_by | null;
  sum?: pokemon_v2_generation_sum_order_by | null;
  var_pop?: pokemon_v2_generation_var_pop_order_by | null;
  var_samp?: pokemon_v2_generation_var_samp_order_by | null;
  variance?: pokemon_v2_generation_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_avg_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_max_order_by {
  id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_min_order_by {
  id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_generation".
 */
export interface pokemon_v2_generation_order_by {
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_abilities_aggregate?: pokemon_v2_ability_aggregate_order_by | null;
  pokemon_v2_generationnames_aggregate?: pokemon_v2_generationname_aggregate_order_by | null;
  pokemon_v2_itemgameindices_aggregate?: pokemon_v2_itemgameindex_aggregate_order_by | null;
  pokemon_v2_locationgameindices_aggregate?: pokemon_v2_locationgameindex_aggregate_order_by | null;
  pokemon_v2_moves_aggregate?: pokemon_v2_move_aggregate_order_by | null;
  pokemon_v2_pokemonformgenerations_aggregate?: pokemon_v2_pokemonformgeneration_aggregate_order_by | null;
  pokemon_v2_pokemonspecies_aggregate?: pokemon_v2_pokemonspecies_aggregate_order_by | null;
  pokemon_v2_pokemontypepasts_aggregate?: pokemon_v2_pokemontypepast_aggregate_order_by | null;
  pokemon_v2_region?: pokemon_v2_region_order_by | null;
  pokemon_v2_typegameindices_aggregate?: pokemon_v2_typegameindex_aggregate_order_by | null;
  pokemon_v2_types_aggregate?: pokemon_v2_type_aggregate_order_by | null;
  pokemon_v2_versiongroups_aggregate?: pokemon_v2_versiongroup_aggregate_order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_stddev_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_stddev_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_stddev_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_sum_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_var_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_var_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_variance_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_aggregate_order_by {
  avg?: pokemon_v2_generationname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_generationname_max_order_by | null;
  min?: pokemon_v2_generationname_min_order_by | null;
  stddev?: pokemon_v2_generationname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_generationname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_generationname_stddev_samp_order_by | null;
  sum?: pokemon_v2_generationname_sum_order_by | null;
  var_pop?: pokemon_v2_generationname_var_pop_order_by | null;
  var_samp?: pokemon_v2_generationname_var_samp_order_by | null;
  variance?: pokemon_v2_generationname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_avg_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_max_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_min_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_stddev_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_stddev_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_stddev_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_sum_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_var_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_var_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_variance_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_growthrate".
 */
export interface pokemon_v2_growthrate_order_by {
  formula?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_experiences_aggregate?: pokemon_v2_experience_aggregate_order_by | null;
  pokemon_v2_growthratedescriptions_aggregate?: pokemon_v2_growthratedescription_aggregate_order_by | null;
  pokemon_v2_machines_aggregate?: pokemon_v2_machine_aggregate_order_by | null;
  pokemon_v2_pokemonspecies_aggregate?: pokemon_v2_pokemonspecies_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_aggregate_order_by {
  avg?: pokemon_v2_growthratedescription_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_growthratedescription_max_order_by | null;
  min?: pokemon_v2_growthratedescription_min_order_by | null;
  stddev?: pokemon_v2_growthratedescription_stddev_order_by | null;
  stddev_pop?: pokemon_v2_growthratedescription_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_growthratedescription_stddev_samp_order_by | null;
  sum?: pokemon_v2_growthratedescription_sum_order_by | null;
  var_pop?: pokemon_v2_growthratedescription_var_pop_order_by | null;
  var_samp?: pokemon_v2_growthratedescription_var_samp_order_by | null;
  variance?: pokemon_v2_growthratedescription_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_avg_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_max_order_by {
  description?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_min_order_by {
  description?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_stddev_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_stddev_pop_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_stddev_samp_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_sum_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_var_pop_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_var_samp_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_variance_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_aggregate_order_by {
  avg?: pokemon_v2_item_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_item_max_order_by | null;
  min?: pokemon_v2_item_min_order_by | null;
  stddev?: pokemon_v2_item_stddev_order_by | null;
  stddev_pop?: pokemon_v2_item_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_item_stddev_samp_order_by | null;
  sum?: pokemon_v2_item_sum_order_by | null;
  var_pop?: pokemon_v2_item_var_pop_order_by | null;
  var_samp?: pokemon_v2_item_var_samp_order_by | null;
  variance?: pokemon_v2_item_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_avg_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_max_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_min_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  name?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_item".
 */
export interface pokemon_v2_item_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  name?: order_by | null;
  pokemonV2PokemonevolutionsByHeldItemId_aggregate?: pokemon_v2_pokemonevolution_aggregate_order_by | null;
  pokemon_v2_berries_aggregate?: pokemon_v2_berry_aggregate_order_by | null;
  pokemon_v2_evolutionchains_aggregate?: pokemon_v2_evolutionchain_aggregate_order_by | null;
  pokemon_v2_itemattributemaps_aggregate?: pokemon_v2_itemattributemap_aggregate_order_by | null;
  pokemon_v2_itemcategory?: pokemon_v2_itemcategory_order_by | null;
  pokemon_v2_itemeffecttexts_aggregate?: pokemon_v2_itemeffecttext_aggregate_order_by | null;
  pokemon_v2_itemflavortexts_aggregate?: pokemon_v2_itemflavortext_aggregate_order_by | null;
  pokemon_v2_itemflingeffect?: pokemon_v2_itemflingeffect_order_by | null;
  pokemon_v2_itemgameindices_aggregate?: pokemon_v2_itemgameindex_aggregate_order_by | null;
  pokemon_v2_itemnames_aggregate?: pokemon_v2_itemname_aggregate_order_by | null;
  pokemon_v2_itemsprites_aggregate?: pokemon_v2_itemsprites_aggregate_order_by | null;
  pokemon_v2_machines_aggregate?: pokemon_v2_machine_aggregate_order_by | null;
  pokemon_v2_pokemonevolutions_aggregate?: pokemon_v2_pokemonevolution_aggregate_order_by | null;
  pokemon_v2_pokemonitems_aggregate?: pokemon_v2_pokemonitem_aggregate_order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_stddev_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_stddev_pop_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_stddev_samp_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_sum_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_var_pop_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_var_samp_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_variance_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_aggregate_order_by {
  avg?: pokemon_v2_itemattributemap_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemattributemap_max_order_by | null;
  min?: pokemon_v2_itemattributemap_min_order_by | null;
  stddev?: pokemon_v2_itemattributemap_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemattributemap_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemattributemap_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemattributemap_sum_order_by | null;
  var_pop?: pokemon_v2_itemattributemap_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemattributemap_var_samp_order_by | null;
  variance?: pokemon_v2_itemattributemap_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_avg_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_max_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_min_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_stddev_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_stddev_pop_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_stddev_samp_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_sum_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_var_pop_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_var_samp_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_variance_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_aggregate_order_by {
  avg?: pokemon_v2_itemcategory_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemcategory_max_order_by | null;
  min?: pokemon_v2_itemcategory_min_order_by | null;
  stddev?: pokemon_v2_itemcategory_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemcategory_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemcategory_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemcategory_sum_order_by | null;
  var_pop?: pokemon_v2_itemcategory_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemcategory_var_samp_order_by | null;
  variance?: pokemon_v2_itemcategory_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_avg_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_max_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_min_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  name?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_itemcategory".
 */
export interface pokemon_v2_itemcategory_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_itemcategorynames_aggregate?: pokemon_v2_itemcategoryname_aggregate_order_by | null;
  pokemon_v2_itempocket?: pokemon_v2_itempocket_order_by | null;
  pokemon_v2_items_aggregate?: pokemon_v2_item_aggregate_order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_stddev_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_stddev_pop_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_stddev_samp_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_sum_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_var_pop_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_var_samp_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_variance_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_aggregate_order_by {
  avg?: pokemon_v2_itemcategoryname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemcategoryname_max_order_by | null;
  min?: pokemon_v2_itemcategoryname_min_order_by | null;
  stddev?: pokemon_v2_itemcategoryname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemcategoryname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemcategoryname_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemcategoryname_sum_order_by | null;
  var_pop?: pokemon_v2_itemcategoryname_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemcategoryname_var_samp_order_by | null;
  variance?: pokemon_v2_itemcategoryname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_avg_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_max_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_min_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_stddev_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_stddev_pop_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_stddev_samp_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_sum_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_var_pop_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_var_samp_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_variance_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_aggregate_order_by {
  avg?: pokemon_v2_itemeffecttext_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemeffecttext_max_order_by | null;
  min?: pokemon_v2_itemeffecttext_min_order_by | null;
  stddev?: pokemon_v2_itemeffecttext_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemeffecttext_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemeffecttext_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemeffecttext_sum_order_by | null;
  var_pop?: pokemon_v2_itemeffecttext_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemeffecttext_var_samp_order_by | null;
  variance?: pokemon_v2_itemeffecttext_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_avg_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_max_order_by {
  effect?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  short_effect?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_min_order_by {
  effect?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  short_effect?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_stddev_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_stddev_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_stddev_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_sum_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_var_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_var_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_variance_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_aggregate_order_by {
  avg?: pokemon_v2_itemflavortext_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemflavortext_max_order_by | null;
  min?: pokemon_v2_itemflavortext_min_order_by | null;
  stddev?: pokemon_v2_itemflavortext_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemflavortext_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemflavortext_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemflavortext_sum_order_by | null;
  var_pop?: pokemon_v2_itemflavortext_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemflavortext_var_samp_order_by | null;
  variance?: pokemon_v2_itemflavortext_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_avg_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_max_order_by {
  flavor_text?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_min_order_by {
  flavor_text?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_stddev_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_stddev_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_stddev_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_sum_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_var_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_var_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_variance_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_itemflingeffect".
 */
export interface pokemon_v2_itemflingeffect_order_by {
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_itemflingeffecteffecttexts_aggregate?: pokemon_v2_itemflingeffecteffecttext_aggregate_order_by | null;
  pokemon_v2_items_aggregate?: pokemon_v2_item_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_aggregate_order_by {
  avg?: pokemon_v2_itemflingeffecteffecttext_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemflingeffecteffecttext_max_order_by | null;
  min?: pokemon_v2_itemflingeffecteffecttext_min_order_by | null;
  stddev?: pokemon_v2_itemflingeffecteffecttext_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemflingeffecteffecttext_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemflingeffecteffecttext_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemflingeffecteffecttext_sum_order_by | null;
  var_pop?: pokemon_v2_itemflingeffecteffecttext_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemflingeffecteffecttext_var_samp_order_by | null;
  variance?: pokemon_v2_itemflingeffecteffecttext_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_avg_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_max_order_by {
  effect?: order_by | null;
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_min_order_by {
  effect?: order_by | null;
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_stddev_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_stddev_pop_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_stddev_samp_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_sum_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_var_pop_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_var_samp_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_variance_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_aggregate_order_by {
  avg?: pokemon_v2_itemgameindex_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemgameindex_max_order_by | null;
  min?: pokemon_v2_itemgameindex_min_order_by | null;
  stddev?: pokemon_v2_itemgameindex_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemgameindex_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemgameindex_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemgameindex_sum_order_by | null;
  var_pop?: pokemon_v2_itemgameindex_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemgameindex_var_samp_order_by | null;
  variance?: pokemon_v2_itemgameindex_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_avg_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_max_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_min_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_stddev_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_stddev_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_stddev_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_sum_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_var_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_var_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_variance_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_aggregate_order_by {
  avg?: pokemon_v2_itemname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemname_max_order_by | null;
  min?: pokemon_v2_itemname_min_order_by | null;
  stddev?: pokemon_v2_itemname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemname_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemname_sum_order_by | null;
  var_pop?: pokemon_v2_itemname_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemname_var_samp_order_by | null;
  variance?: pokemon_v2_itemname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_avg_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_max_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_min_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_stddev_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_stddev_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_stddev_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_sum_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_var_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_var_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_variance_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_itempocket".
 */
export interface pokemon_v2_itempocket_order_by {
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_itemcategories_aggregate?: pokemon_v2_itemcategory_aggregate_order_by | null;
  pokemon_v2_itempocketnames_aggregate?: pokemon_v2_itempocketname_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_aggregate_order_by {
  avg?: pokemon_v2_itempocketname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itempocketname_max_order_by | null;
  min?: pokemon_v2_itempocketname_min_order_by | null;
  stddev?: pokemon_v2_itempocketname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itempocketname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itempocketname_stddev_samp_order_by | null;
  sum?: pokemon_v2_itempocketname_sum_order_by | null;
  var_pop?: pokemon_v2_itempocketname_var_pop_order_by | null;
  var_samp?: pokemon_v2_itempocketname_var_samp_order_by | null;
  variance?: pokemon_v2_itempocketname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_avg_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_max_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_min_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_stddev_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_stddev_pop_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_stddev_samp_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_sum_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_var_pop_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_var_samp_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_variance_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_aggregate_order_by {
  avg?: pokemon_v2_itemsprites_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemsprites_max_order_by | null;
  min?: pokemon_v2_itemsprites_min_order_by | null;
  stddev?: pokemon_v2_itemsprites_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemsprites_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemsprites_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemsprites_sum_order_by | null;
  var_pop?: pokemon_v2_itemsprites_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemsprites_var_samp_order_by | null;
  variance?: pokemon_v2_itemsprites_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_avg_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_max_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  sprites?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_min_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  sprites?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_stddev_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_stddev_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_stddev_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_sum_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_var_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_var_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_variance_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_aggregate_order_by {
  avg?: pokemon_v2_location_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_location_max_order_by | null;
  min?: pokemon_v2_location_min_order_by | null;
  stddev?: pokemon_v2_location_stddev_order_by | null;
  stddev_pop?: pokemon_v2_location_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_location_stddev_samp_order_by | null;
  sum?: pokemon_v2_location_sum_order_by | null;
  var_pop?: pokemon_v2_location_var_pop_order_by | null;
  var_samp?: pokemon_v2_location_var_samp_order_by | null;
  variance?: pokemon_v2_location_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_avg_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_max_order_by {
  id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_min_order_by {
  id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_stddev_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_stddev_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_stddev_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_sum_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_var_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_var_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_variance_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_aggregate_order_by {
  avg?: pokemon_v2_locationgameindex_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_locationgameindex_max_order_by | null;
  min?: pokemon_v2_locationgameindex_min_order_by | null;
  stddev?: pokemon_v2_locationgameindex_stddev_order_by | null;
  stddev_pop?: pokemon_v2_locationgameindex_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_locationgameindex_stddev_samp_order_by | null;
  sum?: pokemon_v2_locationgameindex_sum_order_by | null;
  var_pop?: pokemon_v2_locationgameindex_var_pop_order_by | null;
  var_samp?: pokemon_v2_locationgameindex_var_samp_order_by | null;
  variance?: pokemon_v2_locationgameindex_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_avg_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_max_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_min_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_stddev_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_stddev_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_stddev_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_sum_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_var_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_var_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_variance_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_aggregate_order_by {
  avg?: pokemon_v2_machine_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_machine_max_order_by | null;
  min?: pokemon_v2_machine_min_order_by | null;
  stddev?: pokemon_v2_machine_stddev_order_by | null;
  stddev_pop?: pokemon_v2_machine_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_machine_stddev_samp_order_by | null;
  sum?: pokemon_v2_machine_sum_order_by | null;
  var_pop?: pokemon_v2_machine_var_pop_order_by | null;
  var_samp?: pokemon_v2_machine_var_samp_order_by | null;
  variance?: pokemon_v2_machine_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_avg_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_max_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_min_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_stddev_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_stddev_pop_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_stddev_samp_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_sum_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_var_pop_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_var_samp_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_variance_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_aggregate_order_by {
  avg?: pokemon_v2_move_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_move_max_order_by | null;
  min?: pokemon_v2_move_min_order_by | null;
  stddev?: pokemon_v2_move_stddev_order_by | null;
  stddev_pop?: pokemon_v2_move_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_move_stddev_samp_order_by | null;
  sum?: pokemon_v2_move_sum_order_by | null;
  var_pop?: pokemon_v2_move_var_pop_order_by | null;
  var_samp?: pokemon_v2_move_var_samp_order_by | null;
  variance?: pokemon_v2_move_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_avg_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_max_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  name?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_min_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  name?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_stddev_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_stddev_pop_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_stddev_samp_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_sum_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_var_pop_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_var_samp_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_variance_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_aggregate_order_by {
  avg?: pokemon_v2_palpark_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_palpark_max_order_by | null;
  min?: pokemon_v2_palpark_min_order_by | null;
  stddev?: pokemon_v2_palpark_stddev_order_by | null;
  stddev_pop?: pokemon_v2_palpark_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_palpark_stddev_samp_order_by | null;
  sum?: pokemon_v2_palpark_sum_order_by | null;
  var_pop?: pokemon_v2_palpark_var_pop_order_by | null;
  var_samp?: pokemon_v2_palpark_var_samp_order_by | null;
  variance?: pokemon_v2_palpark_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_avg_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_max_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_min_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_stddev_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_stddev_pop_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_stddev_samp_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_sum_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_var_pop_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_var_samp_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_variance_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_aggregate_order_by {
  avg?: pokemon_v2_pokedex_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokedex_max_order_by | null;
  min?: pokemon_v2_pokedex_min_order_by | null;
  stddev?: pokemon_v2_pokedex_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokedex_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokedex_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokedex_sum_order_by | null;
  var_pop?: pokemon_v2_pokedex_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokedex_var_samp_order_by | null;
  variance?: pokemon_v2_pokedex_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_avg_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_max_order_by {
  id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_min_order_by {
  id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_stddev_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_stddev_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_stddev_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_sum_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_var_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_var_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_variance_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_aggregate_order_by {
  avg?: pokemon_v2_pokemon_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemon_max_order_by | null;
  min?: pokemon_v2_pokemon_min_order_by | null;
  stddev?: pokemon_v2_pokemon_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemon_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemon_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemon_sum_order_by | null;
  var_pop?: pokemon_v2_pokemon_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemon_var_samp_order_by | null;
  variance?: pokemon_v2_pokemon_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_avg_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_max_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_min_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_pokemon".
 */
export interface pokemon_v2_pokemon_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  is_default?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  pokemon_v2_encounters_aggregate?: pokemon_v2_encounter_aggregate_order_by | null;
  pokemon_v2_pokemonabilities_aggregate?: pokemon_v2_pokemonability_aggregate_order_by | null;
  pokemon_v2_pokemonforms_aggregate?: pokemon_v2_pokemonform_aggregate_order_by | null;
  pokemon_v2_pokemongameindices_aggregate?: pokemon_v2_pokemongameindex_aggregate_order_by | null;
  pokemon_v2_pokemonitems_aggregate?: pokemon_v2_pokemonitem_aggregate_order_by | null;
  pokemon_v2_pokemonmoves_aggregate?: pokemon_v2_pokemonmove_aggregate_order_by | null;
  pokemon_v2_pokemonspecy?: pokemon_v2_pokemonspecies_order_by | null;
  pokemon_v2_pokemonsprites_aggregate?: pokemon_v2_pokemonsprites_aggregate_order_by | null;
  pokemon_v2_pokemonstats_aggregate?: pokemon_v2_pokemonstat_aggregate_order_by | null;
  pokemon_v2_pokemontypepasts_aggregate?: pokemon_v2_pokemontypepast_aggregate_order_by | null;
  pokemon_v2_pokemontypes_aggregate?: pokemon_v2_pokemontype_aggregate_order_by | null;
  weight?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_stddev_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_stddev_pop_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_stddev_samp_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_sum_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_var_pop_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_var_samp_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_variance_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonability"
 */
export interface pokemon_v2_pokemonability_aggregate_order_by {
  avg?: pokemon_v2_pokemonability_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonability_max_order_by | null;
  min?: pokemon_v2_pokemonability_min_order_by | null;
  stddev?: pokemon_v2_pokemonability_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonability_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonability_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonability_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonability_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonability_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonability_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonability"
 */
export interface pokemon_v2_pokemonability_avg_order_by {
  ability_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonability"
 */
export interface pokemon_v2_pokemonability_max_order_by {
  ability_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonability"
 */
export interface pokemon_v2_pokemonability_min_order_by {
  ability_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonability"
 */
export interface pokemon_v2_pokemonability_stddev_order_by {
  ability_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonability"
 */
export interface pokemon_v2_pokemonability_stddev_pop_order_by {
  ability_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonability"
 */
export interface pokemon_v2_pokemonability_stddev_samp_order_by {
  ability_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonability"
 */
export interface pokemon_v2_pokemonability_sum_order_by {
  ability_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonability"
 */
export interface pokemon_v2_pokemonability_var_pop_order_by {
  ability_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonability"
 */
export interface pokemon_v2_pokemonability_var_samp_order_by {
  ability_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonability"
 */
export interface pokemon_v2_pokemonability_variance_order_by {
  ability_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_pokemoncolor".
 */
export interface pokemon_v2_pokemoncolor_order_by {
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_pokemoncolornames_aggregate?: pokemon_v2_pokemoncolorname_aggregate_order_by | null;
  pokemon_v2_pokemonspecies_aggregate?: pokemon_v2_pokemonspecies_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_aggregate_order_by {
  avg?: pokemon_v2_pokemoncolorname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemoncolorname_max_order_by | null;
  min?: pokemon_v2_pokemoncolorname_min_order_by | null;
  stddev?: pokemon_v2_pokemoncolorname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemoncolorname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemoncolorname_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemoncolorname_sum_order_by | null;
  var_pop?: pokemon_v2_pokemoncolorname_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemoncolorname_var_samp_order_by | null;
  variance?: pokemon_v2_pokemoncolorname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_avg_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_max_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_min_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_stddev_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_stddev_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_stddev_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_sum_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_var_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_var_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_variance_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_aggregate_order_by {
  avg?: pokemon_v2_pokemondexnumber_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemondexnumber_max_order_by | null;
  min?: pokemon_v2_pokemondexnumber_min_order_by | null;
  stddev?: pokemon_v2_pokemondexnumber_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemondexnumber_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemondexnumber_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemondexnumber_sum_order_by | null;
  var_pop?: pokemon_v2_pokemondexnumber_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemondexnumber_var_samp_order_by | null;
  variance?: pokemon_v2_pokemondexnumber_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_avg_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_max_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_min_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_stddev_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_stddev_pop_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_stddev_samp_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_sum_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_var_pop_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_var_samp_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_variance_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_aggregate_order_by {
  avg?: pokemon_v2_pokemonegggroup_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonegggroup_max_order_by | null;
  min?: pokemon_v2_pokemonegggroup_min_order_by | null;
  stddev?: pokemon_v2_pokemonegggroup_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonegggroup_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonegggroup_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonegggroup_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonegggroup_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonegggroup_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonegggroup_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_avg_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_max_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_min_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_stddev_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_stddev_pop_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_stddev_samp_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_sum_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_var_pop_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_var_samp_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_variance_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_aggregate_order_by {
  avg?: pokemon_v2_pokemonevolution_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonevolution_max_order_by | null;
  min?: pokemon_v2_pokemonevolution_min_order_by | null;
  stddev?: pokemon_v2_pokemonevolution_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonevolution_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonevolution_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonevolution_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonevolution_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonevolution_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonevolution_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_avg_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_max_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  time_of_day?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_min_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  time_of_day?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_stddev_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_stddev_pop_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_stddev_samp_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_sum_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_var_pop_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_var_samp_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_variance_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonform"
 */
export interface pokemon_v2_pokemonform_aggregate_order_by {
  avg?: pokemon_v2_pokemonform_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonform_max_order_by | null;
  min?: pokemon_v2_pokemonform_min_order_by | null;
  stddev?: pokemon_v2_pokemonform_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonform_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonform_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonform_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonform_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonform_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonform_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonform"
 */
export interface pokemon_v2_pokemonform_avg_order_by {
  form_order?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonform"
 */
export interface pokemon_v2_pokemonform_max_order_by {
  form_name?: order_by | null;
  form_order?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonform"
 */
export interface pokemon_v2_pokemonform_min_order_by {
  form_name?: order_by | null;
  form_order?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonform"
 */
export interface pokemon_v2_pokemonform_stddev_order_by {
  form_order?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonform"
 */
export interface pokemon_v2_pokemonform_stddev_pop_order_by {
  form_order?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonform"
 */
export interface pokemon_v2_pokemonform_stddev_samp_order_by {
  form_order?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonform"
 */
export interface pokemon_v2_pokemonform_sum_order_by {
  form_order?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonform"
 */
export interface pokemon_v2_pokemonform_var_pop_order_by {
  form_order?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonform"
 */
export interface pokemon_v2_pokemonform_var_samp_order_by {
  form_order?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonform"
 */
export interface pokemon_v2_pokemonform_variance_order_by {
  form_order?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_aggregate_order_by {
  avg?: pokemon_v2_pokemonformgeneration_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonformgeneration_max_order_by | null;
  min?: pokemon_v2_pokemonformgeneration_min_order_by | null;
  stddev?: pokemon_v2_pokemonformgeneration_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonformgeneration_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonformgeneration_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonformgeneration_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonformgeneration_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonformgeneration_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonformgeneration_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_avg_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_max_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_min_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_stddev_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_stddev_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_stddev_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_sum_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_var_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_var_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_variance_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemongameindex"
 */
export interface pokemon_v2_pokemongameindex_aggregate_order_by {
  avg?: pokemon_v2_pokemongameindex_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemongameindex_max_order_by | null;
  min?: pokemon_v2_pokemongameindex_min_order_by | null;
  stddev?: pokemon_v2_pokemongameindex_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemongameindex_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemongameindex_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemongameindex_sum_order_by | null;
  var_pop?: pokemon_v2_pokemongameindex_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemongameindex_var_samp_order_by | null;
  variance?: pokemon_v2_pokemongameindex_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemongameindex"
 */
export interface pokemon_v2_pokemongameindex_avg_order_by {
  game_index?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemongameindex"
 */
export interface pokemon_v2_pokemongameindex_max_order_by {
  game_index?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemongameindex"
 */
export interface pokemon_v2_pokemongameindex_min_order_by {
  game_index?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemongameindex"
 */
export interface pokemon_v2_pokemongameindex_stddev_order_by {
  game_index?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemongameindex"
 */
export interface pokemon_v2_pokemongameindex_stddev_pop_order_by {
  game_index?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemongameindex"
 */
export interface pokemon_v2_pokemongameindex_stddev_samp_order_by {
  game_index?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemongameindex"
 */
export interface pokemon_v2_pokemongameindex_sum_order_by {
  game_index?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemongameindex"
 */
export interface pokemon_v2_pokemongameindex_var_pop_order_by {
  game_index?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemongameindex"
 */
export interface pokemon_v2_pokemongameindex_var_samp_order_by {
  game_index?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemongameindex"
 */
export interface pokemon_v2_pokemongameindex_variance_order_by {
  game_index?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_pokemonhabitat".
 */
export interface pokemon_v2_pokemonhabitat_order_by {
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_pokemonhabitatnames_aggregate?: pokemon_v2_pokemonhabitatname_aggregate_order_by | null;
  pokemon_v2_pokemonspecies_aggregate?: pokemon_v2_pokemonspecies_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_aggregate_order_by {
  avg?: pokemon_v2_pokemonhabitatname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonhabitatname_max_order_by | null;
  min?: pokemon_v2_pokemonhabitatname_min_order_by | null;
  stddev?: pokemon_v2_pokemonhabitatname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonhabitatname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonhabitatname_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonhabitatname_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonhabitatname_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonhabitatname_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonhabitatname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_avg_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_max_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_min_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_stddev_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_stddev_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_stddev_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_sum_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_var_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_var_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_variance_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_aggregate_order_by {
  avg?: pokemon_v2_pokemonitem_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonitem_max_order_by | null;
  min?: pokemon_v2_pokemonitem_min_order_by | null;
  stddev?: pokemon_v2_pokemonitem_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonitem_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonitem_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonitem_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonitem_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonitem_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonitem_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_avg_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_max_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_min_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_stddev_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_stddev_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_stddev_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_sum_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_var_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_var_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_variance_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonmove"
 */
export interface pokemon_v2_pokemonmove_aggregate_order_by {
  avg?: pokemon_v2_pokemonmove_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonmove_max_order_by | null;
  min?: pokemon_v2_pokemonmove_min_order_by | null;
  stddev?: pokemon_v2_pokemonmove_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonmove_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonmove_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonmove_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonmove_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonmove_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonmove_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonmove"
 */
export interface pokemon_v2_pokemonmove_avg_order_by {
  id?: order_by | null;
  level?: order_by | null;
  move_id?: order_by | null;
  move_learn_method_id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonmove"
 */
export interface pokemon_v2_pokemonmove_max_order_by {
  id?: order_by | null;
  level?: order_by | null;
  move_id?: order_by | null;
  move_learn_method_id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonmove"
 */
export interface pokemon_v2_pokemonmove_min_order_by {
  id?: order_by | null;
  level?: order_by | null;
  move_id?: order_by | null;
  move_learn_method_id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonmove"
 */
export interface pokemon_v2_pokemonmove_stddev_order_by {
  id?: order_by | null;
  level?: order_by | null;
  move_id?: order_by | null;
  move_learn_method_id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonmove"
 */
export interface pokemon_v2_pokemonmove_stddev_pop_order_by {
  id?: order_by | null;
  level?: order_by | null;
  move_id?: order_by | null;
  move_learn_method_id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonmove"
 */
export interface pokemon_v2_pokemonmove_stddev_samp_order_by {
  id?: order_by | null;
  level?: order_by | null;
  move_id?: order_by | null;
  move_learn_method_id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonmove"
 */
export interface pokemon_v2_pokemonmove_sum_order_by {
  id?: order_by | null;
  level?: order_by | null;
  move_id?: order_by | null;
  move_learn_method_id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonmove"
 */
export interface pokemon_v2_pokemonmove_var_pop_order_by {
  id?: order_by | null;
  level?: order_by | null;
  move_id?: order_by | null;
  move_learn_method_id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonmove"
 */
export interface pokemon_v2_pokemonmove_var_samp_order_by {
  id?: order_by | null;
  level?: order_by | null;
  move_id?: order_by | null;
  move_learn_method_id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonmove"
 */
export interface pokemon_v2_pokemonmove_variance_order_by {
  id?: order_by | null;
  level?: order_by | null;
  move_id?: order_by | null;
  move_learn_method_id?: order_by | null;
  order?: order_by | null;
  pokemon_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_pokemonshape".
 */
export interface pokemon_v2_pokemonshape_order_by {
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_pokemonshapenames_aggregate?: pokemon_v2_pokemonshapename_aggregate_order_by | null;
  pokemon_v2_pokemonspecies_aggregate?: pokemon_v2_pokemonspecies_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_aggregate_order_by {
  avg?: pokemon_v2_pokemonshapename_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonshapename_max_order_by | null;
  min?: pokemon_v2_pokemonshapename_min_order_by | null;
  stddev?: pokemon_v2_pokemonshapename_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonshapename_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonshapename_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonshapename_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonshapename_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonshapename_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonshapename_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_avg_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_max_order_by {
  awesome_name?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_min_order_by {
  awesome_name?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_stddev_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_stddev_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_stddev_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_sum_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_var_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_var_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_variance_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_aggregate_order_by {
  avg?: pokemon_v2_pokemonspecies_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonspecies_max_order_by | null;
  min?: pokemon_v2_pokemonspecies_min_order_by | null;
  stddev?: pokemon_v2_pokemonspecies_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonspecies_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonspecies_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonspecies_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonspecies_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonspecies_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonspecies_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_avg_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_max_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_min_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_pokemonspecies".
 */
export interface pokemon_v2_pokemonspecies_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  forms_switchable?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  has_gender_differences?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  is_baby?: order_by | null;
  is_legendary?: order_by | null;
  is_mythical?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
  pokemonV2PokemonevolutionsByPartySpeciesId_aggregate?: pokemon_v2_pokemonevolution_aggregate_order_by | null;
  pokemonV2PokemonevolutionsByTradeSpeciesId_aggregate?: pokemon_v2_pokemonevolution_aggregate_order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
  pokemon_v2_evolutionchain?: pokemon_v2_evolutionchain_order_by | null;
  pokemon_v2_generation?: pokemon_v2_generation_order_by | null;
  pokemon_v2_growthrate?: pokemon_v2_growthrate_order_by | null;
  pokemon_v2_palparks_aggregate?: pokemon_v2_palpark_aggregate_order_by | null;
  pokemon_v2_pokemoncolor?: pokemon_v2_pokemoncolor_order_by | null;
  pokemon_v2_pokemondexnumbers_aggregate?: pokemon_v2_pokemondexnumber_aggregate_order_by | null;
  pokemon_v2_pokemonegggroups_aggregate?: pokemon_v2_pokemonegggroup_aggregate_order_by | null;
  pokemon_v2_pokemonevolutions_aggregate?: pokemon_v2_pokemonevolution_aggregate_order_by | null;
  pokemon_v2_pokemonhabitat?: pokemon_v2_pokemonhabitat_order_by | null;
  pokemon_v2_pokemons_aggregate?: pokemon_v2_pokemon_aggregate_order_by | null;
  pokemon_v2_pokemonshape?: pokemon_v2_pokemonshape_order_by | null;
  pokemon_v2_pokemonspecies_aggregate?: pokemon_v2_pokemonspecies_aggregate_order_by | null;
  pokemon_v2_pokemonspeciesdescriptions_aggregate?: pokemon_v2_pokemonspeciesdescription_aggregate_order_by | null;
  pokemon_v2_pokemonspeciesflavortexts_aggregate?: pokemon_v2_pokemonspeciesflavortext_aggregate_order_by | null;
  pokemon_v2_pokemonspeciesnames_aggregate?: pokemon_v2_pokemonspeciesname_aggregate_order_by | null;
  pokemon_v2_pokemonspecy?: pokemon_v2_pokemonspecies_order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_stddev_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_stddev_pop_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_stddev_samp_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_sum_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_var_pop_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_var_samp_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_variance_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_aggregate_order_by {
  avg?: pokemon_v2_pokemonspeciesdescription_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonspeciesdescription_max_order_by | null;
  min?: pokemon_v2_pokemonspeciesdescription_min_order_by | null;
  stddev?: pokemon_v2_pokemonspeciesdescription_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonspeciesdescription_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonspeciesdescription_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonspeciesdescription_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonspeciesdescription_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonspeciesdescription_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonspeciesdescription_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_avg_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_max_order_by {
  description?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_min_order_by {
  description?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_stddev_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_stddev_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_stddev_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_sum_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_var_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_var_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_variance_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_aggregate_order_by {
  avg?: pokemon_v2_pokemonspeciesflavortext_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonspeciesflavortext_max_order_by | null;
  min?: pokemon_v2_pokemonspeciesflavortext_min_order_by | null;
  stddev?: pokemon_v2_pokemonspeciesflavortext_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonspeciesflavortext_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonspeciesflavortext_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonspeciesflavortext_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonspeciesflavortext_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonspeciesflavortext_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonspeciesflavortext_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_avg_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_max_order_by {
  flavor_text?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_min_order_by {
  flavor_text?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_stddev_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_stddev_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_stddev_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_sum_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_var_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_var_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_variance_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_aggregate_order_by {
  avg?: pokemon_v2_pokemonspeciesname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonspeciesname_max_order_by | null;
  min?: pokemon_v2_pokemonspeciesname_min_order_by | null;
  stddev?: pokemon_v2_pokemonspeciesname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonspeciesname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonspeciesname_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonspeciesname_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonspeciesname_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonspeciesname_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonspeciesname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_avg_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_max_order_by {
  genus?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_min_order_by {
  genus?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_stddev_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_stddev_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_stddev_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_sum_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_var_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_var_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_variance_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonsprites"
 */
export interface pokemon_v2_pokemonsprites_aggregate_order_by {
  avg?: pokemon_v2_pokemonsprites_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonsprites_max_order_by | null;
  min?: pokemon_v2_pokemonsprites_min_order_by | null;
  stddev?: pokemon_v2_pokemonsprites_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonsprites_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonsprites_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonsprites_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonsprites_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonsprites_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonsprites_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonsprites"
 */
export interface pokemon_v2_pokemonsprites_avg_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonsprites"
 */
export interface pokemon_v2_pokemonsprites_max_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
  sprites?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonsprites"
 */
export interface pokemon_v2_pokemonsprites_min_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
  sprites?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonsprites"
 */
export interface pokemon_v2_pokemonsprites_stddev_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonsprites"
 */
export interface pokemon_v2_pokemonsprites_stddev_pop_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonsprites"
 */
export interface pokemon_v2_pokemonsprites_stddev_samp_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonsprites"
 */
export interface pokemon_v2_pokemonsprites_sum_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonsprites"
 */
export interface pokemon_v2_pokemonsprites_var_pop_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonsprites"
 */
export interface pokemon_v2_pokemonsprites_var_samp_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonsprites"
 */
export interface pokemon_v2_pokemonsprites_variance_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonstat"
 */
export interface pokemon_v2_pokemonstat_aggregate_order_by {
  avg?: pokemon_v2_pokemonstat_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonstat_max_order_by | null;
  min?: pokemon_v2_pokemonstat_min_order_by | null;
  stddev?: pokemon_v2_pokemonstat_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonstat_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonstat_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonstat_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonstat_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonstat_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonstat_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonstat"
 */
export interface pokemon_v2_pokemonstat_avg_order_by {
  base_stat?: order_by | null;
  effort?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  stat_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonstat"
 */
export interface pokemon_v2_pokemonstat_max_order_by {
  base_stat?: order_by | null;
  effort?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  stat_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonstat"
 */
export interface pokemon_v2_pokemonstat_min_order_by {
  base_stat?: order_by | null;
  effort?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  stat_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonstat"
 */
export interface pokemon_v2_pokemonstat_stddev_order_by {
  base_stat?: order_by | null;
  effort?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  stat_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonstat"
 */
export interface pokemon_v2_pokemonstat_stddev_pop_order_by {
  base_stat?: order_by | null;
  effort?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  stat_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonstat"
 */
export interface pokemon_v2_pokemonstat_stddev_samp_order_by {
  base_stat?: order_by | null;
  effort?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  stat_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonstat"
 */
export interface pokemon_v2_pokemonstat_sum_order_by {
  base_stat?: order_by | null;
  effort?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  stat_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonstat"
 */
export interface pokemon_v2_pokemonstat_var_pop_order_by {
  base_stat?: order_by | null;
  effort?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  stat_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonstat"
 */
export interface pokemon_v2_pokemonstat_var_samp_order_by {
  base_stat?: order_by | null;
  effort?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  stat_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonstat"
 */
export interface pokemon_v2_pokemonstat_variance_order_by {
  base_stat?: order_by | null;
  effort?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  stat_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemontype"
 */
export interface pokemon_v2_pokemontype_aggregate_order_by {
  avg?: pokemon_v2_pokemontype_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemontype_max_order_by | null;
  min?: pokemon_v2_pokemontype_min_order_by | null;
  stddev?: pokemon_v2_pokemontype_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemontype_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemontype_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemontype_sum_order_by | null;
  var_pop?: pokemon_v2_pokemontype_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemontype_var_samp_order_by | null;
  variance?: pokemon_v2_pokemontype_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemontype"
 */
export interface pokemon_v2_pokemontype_avg_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemontype"
 */
export interface pokemon_v2_pokemontype_max_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemontype"
 */
export interface pokemon_v2_pokemontype_min_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemontype"
 */
export interface pokemon_v2_pokemontype_stddev_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemontype"
 */
export interface pokemon_v2_pokemontype_stddev_pop_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemontype"
 */
export interface pokemon_v2_pokemontype_stddev_samp_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemontype"
 */
export interface pokemon_v2_pokemontype_sum_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemontype"
 */
export interface pokemon_v2_pokemontype_var_pop_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemontype"
 */
export interface pokemon_v2_pokemontype_var_samp_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemontype"
 */
export interface pokemon_v2_pokemontype_variance_order_by {
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_aggregate_order_by {
  avg?: pokemon_v2_pokemontypepast_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemontypepast_max_order_by | null;
  min?: pokemon_v2_pokemontypepast_min_order_by | null;
  stddev?: pokemon_v2_pokemontypepast_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemontypepast_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemontypepast_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemontypepast_sum_order_by | null;
  var_pop?: pokemon_v2_pokemontypepast_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemontypepast_var_samp_order_by | null;
  variance?: pokemon_v2_pokemontypepast_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_avg_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_max_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_min_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_stddev_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_stddev_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_stddev_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_sum_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_var_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_var_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_variance_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_region".
 */
export interface pokemon_v2_region_order_by {
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_generations_aggregate?: pokemon_v2_generation_aggregate_order_by | null;
  pokemon_v2_locations_aggregate?: pokemon_v2_location_aggregate_order_by | null;
  pokemon_v2_pokedexes_aggregate?: pokemon_v2_pokedex_aggregate_order_by | null;
  pokemon_v2_regionnames_aggregate?: pokemon_v2_regionname_aggregate_order_by | null;
  pokemon_v2_versiongroupregions_aggregate?: pokemon_v2_versiongroupregion_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_aggregate_order_by {
  avg?: pokemon_v2_regionname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_regionname_max_order_by | null;
  min?: pokemon_v2_regionname_min_order_by | null;
  stddev?: pokemon_v2_regionname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_regionname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_regionname_stddev_samp_order_by | null;
  sum?: pokemon_v2_regionname_sum_order_by | null;
  var_pop?: pokemon_v2_regionname_var_pop_order_by | null;
  var_samp?: pokemon_v2_regionname_var_samp_order_by | null;
  variance?: pokemon_v2_regionname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_avg_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_max_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_min_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_stddev_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_stddev_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_stddev_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_sum_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_var_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_var_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_variance_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_aggregate_order_by {
  avg?: pokemon_v2_type_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_type_max_order_by | null;
  min?: pokemon_v2_type_min_order_by | null;
  stddev?: pokemon_v2_type_stddev_order_by | null;
  stddev_pop?: pokemon_v2_type_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_type_stddev_samp_order_by | null;
  sum?: pokemon_v2_type_sum_order_by | null;
  var_pop?: pokemon_v2_type_var_pop_order_by | null;
  var_samp?: pokemon_v2_type_var_samp_order_by | null;
  variance?: pokemon_v2_type_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_avg_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_max_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_min_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_stddev_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_stddev_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_stddev_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_sum_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_var_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_var_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_variance_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_aggregate_order_by {
  avg?: pokemon_v2_typegameindex_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_typegameindex_max_order_by | null;
  min?: pokemon_v2_typegameindex_min_order_by | null;
  stddev?: pokemon_v2_typegameindex_stddev_order_by | null;
  stddev_pop?: pokemon_v2_typegameindex_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_typegameindex_stddev_samp_order_by | null;
  sum?: pokemon_v2_typegameindex_sum_order_by | null;
  var_pop?: pokemon_v2_typegameindex_var_pop_order_by | null;
  var_samp?: pokemon_v2_typegameindex_var_samp_order_by | null;
  variance?: pokemon_v2_typegameindex_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_avg_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_max_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_min_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_stddev_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_stddev_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_stddev_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_sum_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_var_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_var_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_variance_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_aggregate_order_by {
  avg?: pokemon_v2_versiongroup_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_versiongroup_max_order_by | null;
  min?: pokemon_v2_versiongroup_min_order_by | null;
  stddev?: pokemon_v2_versiongroup_stddev_order_by | null;
  stddev_pop?: pokemon_v2_versiongroup_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_versiongroup_stddev_samp_order_by | null;
  sum?: pokemon_v2_versiongroup_sum_order_by | null;
  var_pop?: pokemon_v2_versiongroup_var_pop_order_by | null;
  var_samp?: pokemon_v2_versiongroup_var_samp_order_by | null;
  variance?: pokemon_v2_versiongroup_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_avg_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_max_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_min_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_stddev_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_stddev_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_stddev_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_sum_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_var_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_var_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_variance_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_aggregate_order_by {
  avg?: pokemon_v2_versiongroupregion_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_versiongroupregion_max_order_by | null;
  min?: pokemon_v2_versiongroupregion_min_order_by | null;
  stddev?: pokemon_v2_versiongroupregion_stddev_order_by | null;
  stddev_pop?: pokemon_v2_versiongroupregion_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_versiongroupregion_stddev_samp_order_by | null;
  sum?: pokemon_v2_versiongroupregion_sum_order_by | null;
  var_pop?: pokemon_v2_versiongroupregion_var_pop_order_by | null;
  var_samp?: pokemon_v2_versiongroupregion_var_samp_order_by | null;
  variance?: pokemon_v2_versiongroupregion_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_avg_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by max() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_max_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_min_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_stddev_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_stddev_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_stddev_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_sum_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_var_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_var_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_variance_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
