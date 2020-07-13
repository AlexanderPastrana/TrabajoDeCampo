CREATE TABLE public.clients (
  first_name text COLLATE pg_catalog."default",
  last_name text COLLATE pg_catalog."default",
  document_type text COLLATE pg_catalog."default",
  document_number text COLLATE pg_catalog."default",
  department text COLLATE pg_catalog."default",
  city text COLLATE pg_catalog."default",
  address text COLLATE pg_catalog."default",
  date text COLLATE pg_catalog."default",
  phone_number text COLLATE pg_catalog."default"
) TABLESPACE pg_default;
ALTER TABLE public.clients OWNER to postgres;
CREATE TABLE public.drivers (
    first_name text COLLATE pg_catalog."default",
    last_name text COLLATE pg_catalog."default",
    document_type text COLLATE pg_catalog."default",
    document_number text COLLATE pg_catalog."default",
    phone_number text COLLATE pg_catalog."default",
    driving_license_number text COLLATE pg_catalog."default",
    transit_license_number text COLLATE pg_catalog."default",
    soat text COLLATE pg_catalog."default",
    mechanical_technical_review text COLLATE pg_catalog."default",
    national_cargo_transportation_registraion text COLLATE pg_catalog."default",
    contractual_and_noncontractual_insurance text COLLATE pg_catalog."default",
    vehicle_plate text COLLATE pg_catalog."default",
    date text COLLATE pg_catalog."default"
  ) TABLESPACE pg_default;
ALTER TABLE public.drivers OWNER to postgres;
CREATE TABLE public."Orders" (
    order_identification_number text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    quantity_of_merchadise text COLLATE pg_catalog."default",
    merchandise_weight text COLLATE pg_catalog."default",
    shipping_point text COLLATE pg_catalog."default",
    arrival_point text COLLATE pg_catalog."default",
    charging_date text COLLATE pg_catalog."default",
    departure_date text COLLATE pg_catalog."default",
    observations text COLLATE pg_catalog."default"
  ) TABLESPACE pg_default;
ALTER TABLE public. "Orders" OWNER to postgres;