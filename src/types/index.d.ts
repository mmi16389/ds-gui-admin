// Here you can define types that
// you'll be using across your application

import Vue from 'vue';

export interface Link {
	id: number;
	url: string;
	name: string;
}
export interface Costumer {
	id?:number,
	firstname?: string;
	lastname?: string;
	email?: string;
	adresse?: string;
	zipcode?: string;
	region?: string;
}
/** Vue Router next() param */
export interface NextRoute {
	name: string;
}

/**
 * Extends refs, eg:
 * $refs!: Refs<{
 *  myProp: MyType;
 * }>;
 */
export type Refs<T extends object> = Vue['$refs'] & T;

