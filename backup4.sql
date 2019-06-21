--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3
-- Dumped by pg_dump version 11.2

-- Started on 2019-06-21 14:10:17

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE defaultdb;
--
-- TOC entry 3995 (class 1262 OID 16394)
-- Name: defaultdb; Type: DATABASE; Schema: -; Owner: doadmin
--

CREATE DATABASE defaultdb WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';


ALTER DATABASE defaultdb OWNER TO doadmin;

\connect defaultdb

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3979 (class 0 OID 17230)
-- Dependencies: 201
-- Data for Name: carta; Type: TABLE DATA; Schema: public; Owner: doadmin
--

INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (119, '2019-06-15', 1, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (120, '2019-06-15', 371, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (121, '2019-06-15', 359, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (47, '2019-05-29', 327, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (48, '2019-05-29', 328, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (49, '2019-05-29', 1, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (50, '2019-05-29', 1, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (51, '2019-05-29', 1, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (52, '2019-05-29', 1, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (122, '2019-06-15', 378, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (123, '2019-06-15', 1, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (124, '2019-06-15', 1, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (125, '2019-06-18', 393, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (126, '2019-06-18', 398, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (127, '2019-06-18', 386, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (128, '2019-06-18', 378, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (129, '2019-06-18', 412, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (130, '2019-06-18', 459, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (131, '2019-06-19', 394, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (132, '2019-06-19', 399, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (133, '2019-06-19', 387, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (134, '2019-06-19', 406, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (135, '2019-06-19', 408, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (136, '2019-06-19', 462, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (137, '2019-06-20', 395, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (138, '2019-06-20', 400, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (139, '2019-06-20', 388, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (140, '2019-06-20', 407, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (141, '2019-06-20', 414, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (142, '2019-06-20', 468, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (143, '2019-06-21', 396, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (144, '2019-06-21', 401, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (145, '2019-06-21', 389, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (59, '2019-06-08', 1, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (60, '2019-06-08', 343, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (61, '2019-06-08', 331, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (62, '2019-06-08', 348, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (63, '2019-06-08', 1, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (64, '2019-06-08', 1, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (65, '2019-06-09', 1, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (66, '2019-06-09', 344, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (67, '2019-06-09', 332, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (68, '2019-06-09', 408, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (69, '2019-06-09', 1, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (70, '2019-06-09', 1, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (71, '2019-06-10', 361, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (72, '2019-06-10', 366, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (73, '2019-06-10', 354, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (74, '2019-06-10', 373, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (75, '2019-06-10', 380, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (76, '2019-06-10', 459, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (77, '2019-06-11', 362, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (78, '2019-06-11', 367, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (79, '2019-06-11', 355, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (80, '2019-06-11', 374, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (146, '2019-06-21', 407, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (147, '2019-06-21', 415, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (148, '2019-06-21', 458, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (149, '2019-06-22', 1, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (150, '2019-06-22', 402, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (151, '2019-06-22', 390, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (81, '2019-06-11', 381, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (82, '2019-06-11', 460, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (83, '2019-06-12', 363, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (84, '2019-06-12', 368, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (85, '2019-06-12', 356, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (86, '2019-06-12', 375, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (87, '2019-06-12', 382, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (88, '2019-06-12', 461, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (89, '2019-06-13', 364, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (90, '2019-06-13', 369, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (91, '2019-06-13', 357, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (92, '2019-06-13', 376, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (93, '2019-06-13', 383, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (94, '2019-06-13', 463, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (95, '2019-06-14', 365, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (96, '2019-06-14', 370, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (97, '2019-06-14', 358, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (98, '2019-06-14', 377, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (99, '2019-06-14', 384, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (100, '2019-06-14', 469, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (152, '2019-06-22', 409, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (153, '2019-06-22', 1, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (154, '2019-06-22', 1, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (155, '2019-06-23', 1, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (156, '2019-06-23', 403, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (157, '2019-06-23', 391, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (158, '2019-06-23', 410, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (159, '2019-06-23', 1, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (160, '2019-06-23', 1, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (161, '2019-06-24', 423, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (162, '2019-06-24', 428, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (163, '2019-06-24', 416, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (107, '2019-06-16', 1, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (108, '2019-06-16', 372, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (109, '2019-06-16', 360, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (110, '2019-06-16', 379, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (111, '2019-06-16', 1, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (112, '2019-06-16', 1, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (164, '2019-06-24', 435, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (165, '2019-06-24', 442, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (166, '2019-06-24', 468, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (167, '2019-06-25', 424, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (168, '2019-06-25', 429, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (169, '2019-06-25', 417, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (170, '2019-06-25', 436, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (171, '2019-06-25', 443, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (172, '2019-06-25', 464, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (173, '2019-06-26', 425, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (174, '2019-06-26', 430, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (175, '2019-06-26', 418, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (176, '2019-06-26', 437, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (177, '2019-06-26', 444, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (178, '2019-06-26', 468, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (179, '2019-06-27', 426, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (180, '2019-06-27', 431, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (181, '2019-06-27', 419, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (113, '2019-06-17', 392, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (114, '2019-06-17', 397, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (115, '2019-06-17', 385, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (116, '2019-06-17', 404, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (117, '2019-06-17', 411, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (118, '2019-06-17', 466, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (182, '2019-06-27', 438, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (183, '2019-06-27', 445, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (184, '2019-06-27', 469, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (185, '2019-06-28', 427, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (186, '2019-06-28', 432, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (187, '2019-06-28', 420, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (188, '2019-06-28', 439, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (189, '2019-06-28', 446, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (190, '2019-06-28', 463, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (191, '2019-06-29', 1, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (192, '2019-06-29', 433, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (193, '2019-06-29', 355, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (194, '2019-06-29', 440, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (195, '2019-06-29', 1, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (196, '2019-06-29', 1, 6);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (197, '2019-06-30', 1, 1);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (198, '2019-06-30', 434, 2);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (199, '2019-06-30', 422, 3);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (200, '2019-06-30', 441, 4);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (201, '2019-06-30', 1, 5);
INSERT INTO public.carta (id, fecha, "platoId", "tipomenuId") VALUES (202, '2019-06-30', 1, 6);


--
-- TOC entry 3981 (class 0 OID 17238)
-- Dependencies: 203
-- Data for Name: detalle; Type: TABLE DATA; Schema: public; Owner: doadmin
--

INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (29, 7, 192, 45);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (28, 9, 193, 45);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (30, 0, 195, 45);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (20, 13, 182, 47);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (48, 3, 158, 54);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (52, 13, 157, 54);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (54, 12, 156, 54);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (53, 0, 159, 54);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (55, 0, 160, 54);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (122, 0, 89, 53);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (103, 9, 122, 59);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (107, 10, 121, 59);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (106, 22, 120, 59);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (108, 0, 123, 59);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (110, 0, 124, 59);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (94, 20, 107, 60);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (44, 17, 161, 49);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (36, 11, 177, 43);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (35, 12, 176, 43);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (34, 8, 175, 43);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (37, 10, 178, 43);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (10, 12, 200, 44);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (81, 6, 140, 56);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (83, 11, 139, 56);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (21, 10, 179, 47);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (31, 0, 196, 45);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (85, 9, 142, 56);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (75, 0, 132, 58);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (116, 0, 95, 57);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (80, 14, 136, 58);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (73, 9, 134, 58);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (46, 10, 163, 49);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (45, 10, 164, 49);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (22, 9, 183, 47);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (87, 24, 113, 52);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (43, 12, 168, 48);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (40, 9, 169, 48);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (18, 8, 187, 46);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (16, 11, 188, 46);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (50, 12, 166, 49);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (56, 0, 149, 50);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (8, 5, 197, 44);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (78, 11, 133, 58);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (47, 9, 165, 49);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (9, 8, 199, 44);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (118, 10, 98, 57);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (49, 12, 162, 49);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (77, 10, 135, 58);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (104, 19, 119, 59);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (82, 12, 141, 56);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (12, 0, 202, 44);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (26, 16, 194, 45);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (76, 33, 131, 58);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (67, 30, 125, 51);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (42, 13, 172, 48);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (41, 9, 171, 48);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (17, 9, 186, 46);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (14, 0, 201, 44);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (19, 11, 190, 46);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (33, 9, 174, 43);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (15, 12, 189, 46);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (89, 9, 116, 52);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (91, 9, 117, 52);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (86, 13, 115, 52);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (90, 18, 118, 52);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (88, 11, 114, 52);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (51, 0, 155, 54);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (92, 9, 110, 60);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (59, 15, 150, 50);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (69, 13, 148, 55);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (93, 6, 109, 60);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (57, 5, 152, 50);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (58, 27, 151, 50);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (61, 0, 154, 50);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (60, 0, 153, 50);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (65, 11, 147, 55);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (64, 7, 146, 55);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (79, 12, 137, 56);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (66, 13, 144, 55);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (63, 13, 145, 55);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (71, 6, 128, 51);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (68, 13, 127, 51);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (70, 10, 126, 51);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (84, 0, 138, 56);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (121, 11, 97, 57);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (117, 13, 96, 57);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (96, 15, 108, 60);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (98, 0, 111, 60);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (95, 0, 112, 60);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (72, 15, 130, 51);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (13, 8, 198, 44);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (111, 0, 71, 61);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (114, 0, 73, 61);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (109, 0, 74, 61);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (112, 0, 72, 61);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (113, 8, 75, 61);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (115, 7, 76, 61);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (74, 11, 129, 51);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (128, 0, 68, 62);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (130, 20, 66, 62);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (129, 0, 67, 62);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (132, 0, 70, 62);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (97, 0, 83, 63);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (131, 0, 69, 62);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (126, 23, 94, 53);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (124, 10, 91, 53);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (125, 9, 90, 53);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (127, 9, 93, 53);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (123, 9, 92, 53);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (62, 15, 143, 55);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (99, 0, 85, 63);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (100, 0, 86, 63);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (102, 0, 84, 63);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (101, 9, 87, 63);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (105, 10, 88, 63);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (27, 5, 191, 45);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (32, 11, 173, 43);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (119, 9, 99, 57);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (24, 8, 180, 47);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (38, 13, 170, 48);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (11, 8, 185, 46);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (25, 13, 184, 47);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (39, 10, 167, 48);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (120, 13, 100, 57);
INSERT INTO public.detalle (id, cantidad, "cartaId", "pedidoId") VALUES (23, 7, 181, 47);


--
-- TOC entry 3989 (class 0 OID 17277)
-- Dependencies: 211
-- Data for Name: mensaje; Type: TABLE DATA; Schema: public; Owner: doadmin
--



--
-- TOC entry 3983 (class 0 OID 17246)
-- Dependencies: 205
-- Data for Name: pedido; Type: TABLE DATA; Schema: public; Owner: doadmin
--

INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (2, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (3, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (4, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (5, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (6, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (7, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (8, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (9, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (10, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (11, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (12, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (13, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (14, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (15, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (16, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (17, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (18, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (19, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (20, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (21, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (22, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (23, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (24, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (25, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (26, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (27, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (28, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (29, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (30, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (31, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (32, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (33, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (34, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (35, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (36, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (37, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (38, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (39, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (40, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (41, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (42, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (43, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (44, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (45, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (46, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (47, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (48, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (49, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (50, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (51, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (52, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (53, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (54, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (55, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (56, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (57, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (58, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (59, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (60, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (61, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (62, 18990554, '2019-05-29', 18);
INSERT INTO public.pedido (id, rut, fecha, "usuarioId") VALUES (63, 18990554, '2019-05-29', 18);


--
-- TOC entry 3975 (class 0 OID 17207)
-- Dependencies: 197
-- Data for Name: plato; Type: TABLE DATA; Schema: public; Owner: doadmin
--

INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (326, 'Ajiaco Bogotano', 'Preparación semiliquida en base a pollo picado con papas, cebolla y zanahoria', NULL, 570);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (327, 'Garbanzos Criollos con Longaniza picada', 'Garbanzos guisados con zapallo, tocino, cebolla ,arroz, acompañado de longaniza picada.', NULL, 769);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (328, 'Coditos son sasa Boloñesa', 'Coditos acompañados de salsa atomatada en base a carne molida, cebolla, zanahoria y pimentón.', NULL, 316);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (329, 'Prietas con puré', 'Prietas acompañadas de Puré', NULL, 560);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (330, 'Menestron', 'Porotos guisados con verduras picada, zapallo, papas, acelga, carne de cerdo picada, longaniza y fideos.', NULL, 554);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (331, 'Albondiga Italiana con tallarines', 'Molde de carne molina con salsa de tomate acompañado de tallarines', NULL, 571);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (332, 'Caldillo de Marisco', 'Caldo a base de  mariscos surtidos,  papas, zanahoria, cebolla, pimentón y vino blanco', NULL, 341);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (333, 'Croquetas de Pollo con puré', 'Molde de carne molida de pollo en base a huevo y pan rallado acompañado de puré', NULL, 486);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (334, 'Ragout de Cerdo con spaguetti', 'Dados de cerdo en salsa de tomates, acompañado de spaguetti', NULL, 521);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (335, 'Albongigas Atomatadas con Arroz', 'Bola de carne molida en base a huevo y pan rallado, cocinada en salsa atomatada con mirepoix de verduras, acompañadas de arroz', NULL, 519);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (336, 'Zapallo Italiano relleno c/Pino de Pollo ', 'Zapallito italiano relleno con pino de pollo.', NULL, 620);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (337, 'Spaguetti Bontoux', 'Pastel de fideos en base a salsa blanca y pollo picado gratinado al horno', NULL, 677);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (338, 'Cerdo a la Mostaza con coditos a la Mantequilla', 'Carne de cerdo horneada a la mostaza con coditos a la mantequilla', NULL, 518);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (339, 'Pavo al jugo c/arroz griego', 'Pavo a la cacerola con mire poix de verduras, acompañado arroz con tomate, aceitunas', NULL, 497);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (340, 'Carne al jugo con papas al perejil ', 'Carne de vacuno cocinada  a la cacerola con cebolla, zanahoria y pimentón verde acompañada de papas con perejil', NULL, 493);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (341, 'Pollo asado con Espirales al Ajillo', 'Pollo asado al horno acompañado con espirales al ajillo', NULL, 564);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (342, 'Carne a la Cacerola con Choclo a la crema', 'Carne de vacuno con cebolla, zanahoria a la cacerola acompada de choclo a la crema', NULL, 665);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (343, 'Pollo a la Provenzal c/ arroz Zanahoria', 'Pollo picado con cebollín, cebolla, champiñones, tomate, zanahoria, pimentón acompañado de arroz con zanahoria', NULL, 581);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (344, 'Pastel de Papa', 'Puré de papas gratinado al horno, intercalado con pino de carne molida, huevo y aceitunas', NULL, 650);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (345, 'Budin de porotos verdes c/verduras al vapor', 'Molde horneado a base de poroto verde pan rallado huevo y leche, con verduras al vapor', NULL, 319);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (346, 'Tomate Reina con ensalada surtida', 'Tomate relleno de pollo picado con mayonesa acompañado de ensaladas de la estación', NULL, 341);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (347, 'Salpicon de Ave', 'Ensalada a base de lechuga con aceituna, arvejas, choclo, huevo, papas, pollo picado, tomate y limón.', NULL, 321);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (348, 'Ensalada Italiana', 'Ensalada en base de lechuga con tomate, repollo morado, perejil, queso gauda, pimentón rojo, zanahoria, jamón, con aderezo en base a mayonesa, mostaza y ketchup.', NULL, 233);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (349, 'Carbonada de Verduras con Huevo', 'Preparación semi liquida a base de papas, zapallo camote, zanahoria, pimnetón, cebolla y porotos verdes con huevo batido', NULL, 398);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (350, 'Budin de Cabellos de Angel con Verduras Atomatadas', 'Molde horneado de fideos cabellos de ángel en base a huevo acompañado de verduras atomatadas.', NULL, 720);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (351, 'Torta Pascualina', 'Tarta salada rellena de verduras', NULL, 537);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (352, 'Fritos de Arroz con ensalada Imperial', 'Arroz cocido con mezcla de huevo y harina frito acompañado de ensaladas ', NULL, 336);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (353, 'Tortilla de acelga con arroz primavera', 'Preparación en base a huevos y verduras acompañada de ensaladas de la estación', NULL, 440);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (354, 'Spaguetti  a la Carbonara', 'Spaguetti acompañada de salsa blanca con tocino y jamón picado', NULL, 535);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (355, 'Lentejas guisadas con Verduras y Longaniza', 'Guisado de lentejas en base a zapallo, cebolla y verduras acompañado de Longaniza', NULL, 640);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (356, 'Cazuela de Cerdo con Chuchoca', 'Guisado liquido en base a papa, zapallo, chuchoca, con pulpa de cerdo y mire poix de verduras.', NULL, 341);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (357, 'Estofado de Ave', 'Guisado semilíquido de pollo picado, en base a papas, zanahoria, pimentón, cebolla y porotos verdes y arvejas.', NULL, 413);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (358, 'Charquican con vienesas salteadas', 'Puré de verduras en base a papas, acelga, choclo, porotos verdes, zanahoria y zapallo camote acompañado de salchichas', NULL, 509);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (359, 'Goulash de Cerdo con Arroz', 'Carne  de cerdo picada con cebolla, zanahoria acompañado de arroz ', NULL, 435);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (360, 'Estofado de Pavo', 'Guisado semilíquido de pavo picado, en base a papas, zanahoria, pimentón, cebolla y porotos verdes y arvejas.', NULL, 404);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (361, 'Pollo a la cuernavaca con arroz', 'Polo picado con champiñon, crema, pimentón y salsa de tomate acompañado de arroz', NULL, 423);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (362, 'Pastel Suizo', 'Pure de papas intercalado con capaz de jamón y queso gratinado al horno.', NULL, 521);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (363, 'Goulash mixto con papas al eneldo', 'Carne de pollo y cerdo picada con cebolla, zanahoria y salsa de tomate acompañada de papas con eneldo. ', NULL, 427);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (364, 'Cerdo mongoliano con corbatas al perejil', 'Carne de cerdo picada a base de salsa de soya, cebollin acompañada de corbatas con perejil.', NULL, 588);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (365, 'Ragout de pavo con arroz al perejil', 'Carne de pavo picada con crema, salsa de tomate y zanahoria acompañado de arroz', NULL, 521);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (366, 'Carne al vino con papas leonesas', 'Carne de vacuno a la caecrola con vino acompañado de papas con cebolla.', NULL, 493);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (367, 'Pavo al Jugo con arroz griego', 'Pavo a la cacerola con mire poix de verduras, acompañado arroz con tomate, aceitunas', NULL, 497);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (368, 'Pollo Arvejado con espirales a la mantequilla', 'Pollo a la cacerola, aderezado con vino blanco, en base a mire poix de verduras con arvejas acompañado con espirales a la Mantequilla.', NULL, 508);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (369, 'Carne a la cacerola con Arroz al curry', 'Carne de vacuno cocinada  a la cacerola con cebolla, zanahoria y pimentón verde acompañada de arroz con curry', NULL, 610);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (370, 'Cerdo a las finas hierbas con puré', 'Carne de cerdo aromatizada con finas hiervas acompañada de pure', NULL, 493);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (371, 'Pollo a la provenzal con Fetuccini', 'Pollo picado con cebollín, cebolla, champiñones, tomate, zanahoria, pimentón acompañado de fectuccini', NULL, 596);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (372, 'Carne al Jugo con Arroz primavera', 'Carne de vacuno cocinada  a la cacerola con cebolla, zanahoria y pimentón verde acompañada de  arroz con verduras choclo, arvejas y zanahoria', NULL, 368);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (373, 'Budin Tricolor con Verduras al vapor', 'Preparación en base a pan  con zanahorias, acelga y choclo acompañado con verduras al vapor', NULL, 465);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (374, 'Omelette de Jamon con ensalada', 'Batido de huevo con jamón sandwich acompañado con ensaladas.', NULL, 236);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (375, 'Tartaleta de Verduras con Ensaladas', 'Masa delga con salsa blanca con verduras gratinada la horno acompañado de ensaladas', NULL, 653);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (376, 'Ensalada Huevo duro  y Jamon', 'Huevo duro y palmitos, repollo morado, lechuga, pimentón con aderezo de mayonesa y salsa de soya', NULL, 290);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (377, 'Fritos de Porotos Verdes c/ ensalada', 'Porotos verdes con mezcla de huevo y harina, fritos acompañados de papas doradas ', NULL, 467);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (378, 'Lasaña Naturista', 'Preparación a base de huevo con acelga acompañado de ensaladas de la estación ', NULL, 430);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (379, 'Tortilla de Acelga con Ensalada', 'Preparación a base de huevo con acelga acompañado de ensaladas de la estación ', NULL, 344);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (380, 'Guiso de Verduras con Quifaros', 'Mix de verduras al vapor en base a roux acompañado de fideos quifaros', NULL, 390);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (381, 'Frito de acelga con puré', 'Preparación a base de huevos, acelga acompañado de puré', NULL, 430);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (382, 'Hamburguesa de Lentejas con alcega a la portuguesa', 'Preparación a base de huevo pan rallado y lentejas acompañado de alcelga con tocino', NULL, 299);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (383, 'Espirales c/salsa pomodoro', 'Espirales con salsa en base a cebolla, , tomate, vino blanco  y  salsa de tomate', NULL, 560);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (384, 'Omelette queso tomate c/verduras a la crema', 'Batido de huevo con tomate y queso acompañado con verduras a la crema', NULL, 431);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (385, 'Pantrucas', 'Guisado  líquido en base a masas  delgadas y carne, con papas y mirepoix de verduras ', NULL, 356);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (386, 'Porotos granados al pilco con vienesas', 'Guisado de porotos granados al pilco acompañado  vienesas', NULL, 820);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (387, 'Jardinera de Ave con arroz', 'Salteado de filetillo de ave en base zanahoria, zapallo italiano en juliana, acompañada con arroz', NULL, 538);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (388, 'Croquetas de Jurel con puré', 'Molde de carne molida de jurel en base a huevo y pan rallado acompañado de puré', NULL, 486);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (389, 'Guiso de Arvejas Tocino y Longaniza', 'Guisado de Arvejas secas en base a zapallo, tocino, arroz acompañado con longaniza', NULL, 675);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (390, 'Fetuccini con salsa boloñesa', 'Fetuccini acompañados de salsa atomatada en base a carne molida, cebolla, zanahoria y pimentón.', NULL, 585);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (391, 'Pollo Estofado con puré', 'Polo en trozo guisado con arvejas, zanahoria y cebolla acompañado de puré', NULL, 523);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (392, 'Pollo Chiten c/arroz Chino', 'Carne de pollo picada con verduras salteadas acompañado de arroz con cebollin, huevo y zanahoria.', NULL, 465);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (393, 'Cerdo a la catalana con rigatoni', 'Cerdo picado con cebolla, pimenton rojo, tomate, tocino y laurel acompañado de pasta rigatoni.', NULL, 580);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (394, 'Pastel de papas', 'Puré de papas gratinado al horno, intercalado con pino de carne molida, huevo y aceitunas', NULL, 650);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (395, 'Hamburguesa atomatada  c/arroz primavera', 'Molde de carne molida de vacuno con salsa de tomate acompañada de arroz  con verduras choclo, arvejas y zanahoria', NULL, 500);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (396, 'Strogonoff de ave con papas al perejil', 'Carne de pollo picada con crema, pepinillo y champiñones acompañado de papas al perejil', NULL, 495);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (397, 'Panita la Ajillo con puré', 'Panita de vacuno cocinada al ajo con puré', NULL, 438);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (398, 'Pescado frito c/arroz primavera', 'Pescado arrebozado con batido de harina, huevo, leche, cocinado en aceite y acompañado de arroz con verduras choclo, arvejas y zanahoria', NULL, 755);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (399, 'Pavo al romero con Corbatas Atomatadas', 'Pavo aderezado con romero, acompañada de corbatitas en salsa de tomates', NULL, 497);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (400, 'Cerdo arvejado con papas con papas salteadas', 'Cerdo a la cacerola, aderezado con vino blanco, en base a mire poix de verduras con papas salteadas', NULL, 542);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (401, 'Carne a la cacerola con espirales piamontesa', 'Carne de vacuno con cebolla, zanahoria a la cacerola acompada de espirales con pimentón rojo.', NULL, 493);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (402, 'Pollo Curnavaca con papas asadas', 'Polo picado con champiñon, crema, pimentón y salsa de tomate acompañado de papas asadas', NULL, 495);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (403, 'Cerdo a la Mostaza con Espirales al Ajillo', 'Carne de cerdo horneada a la mostaza con espirales con ajo ', NULL, 518);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (404, 'Guiso de zapallo italiano c/arroz', 'Guiso de zapallito italiano al vapor en base a roux acompañado de arroz', NULL, 337);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (405, 'Tomate York con ensalada', 'Tomate relleno con jamón picado con mayonesa acompañado de ensaladas de la estación', NULL, 315);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (406, 'Omelette Tomate albahaca con ensalada', 'Batido de huevo con tomate y albahaca acompañado con ensaladas.', NULL, 451);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (407, 'Pollo con ensalada mixta', 'Pollo al horno acompañado con ensaladas.', NULL, 335);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (408, 'Fritos de acelga y Choclo con ensalada', 'Preparación a base de huevos, acelga y choclo acompañado de ensaladas.', NULL, 360);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (409, 'Omelette chacarero con ensalada', 'Batido de huevo en forma de media luna en base tomate y poroto verde, acompañado de ensaladas', NULL, 422);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (410, 'Tortillas de porotos verdes con ensalada', 'Tortillas de porotos verdes con ensalada', NULL, 360);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (411, 'Hamburguesas de soya con verduras', 'Preparación a base de huevo pan rallado y carne de soya acompañado de verduras asadas', NULL, 342);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (412, 'Quiche choclo, cebolla y pimentón', 'Tarta salada de choclo, cebolla y pimenton sobre una masa crujiente y gratinado al horno', NULL, 595);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (413, 'Frito de acelgas con puré', 'Preparación a base de huevos, acelga acompañado de puré', NULL, 430);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (414, 'Canelones Florentinos', 'Masa delgada rellena con salsa blanca, acelga y queso', NULL, 670);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (415, 'Tortilla de papas con ensalda', 'Preparación en base a huevos y papas acompañada de ensaladas de la estación', NULL, 580);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (416, 'Carbonada de Ave', 'Preparación semilíquida a base de pollo picado, papas, zapallo camote, zanahoria, cebollas,pimentón y choclo', NULL, 465);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (417, 'Garbanzos a la española', 'Garbanzos guisados con zapallo, cebolla acompañados de chorizo picado', NULL, 493);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (418, 'Estofado de pavo', 'Guisado semilíquido de pavo picado, en base a papas, zanahoria, pimentón, cebolla y porotos verdes y arvejas.', NULL, 404);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (419, 'Guatitas a la Jardinera con arroz', 'Guisado atomatado de guatita en base a choclo, zanahoria ,arvejas, acompañado de puré', NULL, 423);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (420, 'Corbatas con salsa Alfredo', 'Corbatas acompañado de salsa blanca y jamon picado.', NULL, 316);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (421, 'Lentejas guisadas con Huevo rallado', 'Guisado de Lentejas con arroz en base a zapallo acompañado de huevo rallado.', NULL, 412);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (422, 'Arroz Milanesa', 'Guisado de arroz en base a pollo, pulpa de cerdo picada, arvejas, zanahoria y longaniza.', NULL, 750);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (423, 'Tomatican con spaguetti', 'Carne de vacuno picada con choclo, cebolla, tomate y salsa de tomate acompañado de spaguetti', NULL, 456);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (424, 'Paella', 'Preparación a base de arroz con carne de pollo, longaniza picados y surtido de marisco con cebolla, zanahoria, pimentón, arvejas y curry', NULL, 750);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (425, 'Cazuela de Vacuno', 'Guisado liquido en base a  carne vacuno, papas, zapallo y arroz.', NULL, 620);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (426, 'Lasaña Bolognesa', 'Masas delgadas intercalas con salsa atomatadas, con carne molida de vacuno, queso, salsa blanca, gratinada.', NULL, 960);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (427, 'Asado Aleman con arroz primavera', 'Brazo horneado de carne molida en base a huevo y pan rallado relleno de huevo duro, zanahoria y cilantro acompañado de arroz con verduras choclo, arvejas y zanahoria', NULL, 431);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (428, 'Pollo al jugo con arroz arvejado', 'Pechuga de pollo cocinada en base a Mire Poix de verduras con arroz arvejado', NULL, 497);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (429, 'Carne a la cacerola con coditos', 'Carne de vacuno acompañado de fideos coditos', NULL, 471);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (430, 'Cerdo a la finas hiervas con puré', 'Carne de cerdo aromatizada con finas hiervas acompañada de puré ', NULL, 493);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (431, 'Pavo atomatado con arroz arabe', 'Carne de pavo con salsa de tomate acompañada de arroz con fideos fritos', NULL, 497);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (432, 'Carne al jugo con espaguetti atomatados', 'Carne de vacuno cocinada  a la cacerola con cebolla, zanahoria y pimentón verde acompañada de spaguettis atomatados', NULL, 480);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (433, 'Cerdo con Arroz al perejil', 'Carne de cerdo al horno acompañado de arroz con perejil', NULL, 567);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (434, 'Carne arvejada con espirales', 'Carne a la cacerola, en base a mire poix de verduras con arvejas acompañado con espirales', NULL, 469);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (435, 'Salteado de zapallo italiano con papas', 'Zapallo italiano salteado acompañado de papas', NULL, 356);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (436, 'Wraps de pollo', 'Tortilla de trigo rellena con pollo, lechuga, tomate y mayonesa acompañada de ensaladas de la estación', NULL, 350);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (437, 'Fritos de porotos verde con ensalada', 'Porotos verdes con mezcla de huevo y harina, fritos acompañados de papas doradas ', NULL, 268);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (438, 'Budin de zanahorias c/ensalada', 'Molde horneado a base de zanahoria pan rallado huevo y leche, con ensalada', NULL, 336);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (439, 'Omelette Jardinera con ensalada', 'Batido de huevo en forma de media luna en base choclo, arvejas y zanahoria, acompañado de ensaladas', NULL, 236);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (440, 'Ensalada Parisien', 'Ensalada a base de lechuga, repollo morado, tomate, perejil, queso gauda, pimenton rojo, zanahoria, jamón y aderezo', NULL, 337);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (441, 'Tortilla de Verduras con ensalada', 'Preparación en base a huevos y verduras acompañada de ensaladas de la estación', NULL, 219);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (442, 'Spaguetti con salsa de queso', 'spaguetti con salsa blanca, crema y queso gauda.', NULL, 680);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (443, 'Omelette de queso fresco con arroz', 'Batido de huevo con queso fresco acompañado con arroz.', NULL, 420);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (444, 'Tortilla de zanahoria con espirales al eneldo', 'Preparación a base de huevo con zanahoria acompañado de espirales con eneldo', NULL, 321);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (445, 'Lasaña de verduras al champiñon', 'Masas delgadas intercaladas con salsa blanca y verduras, zapallo italiano ,porotos verdes, choclo, zanahoria y champiñones', NULL, 430);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (446, 'Budin de coliflor con arroz', 'Preparación en base a pan  con coliflor acompañado con arroz', NULL, 423);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (458, 'Pollo con papas', NULL, NULL, NULL);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (459, 'Carne con fideos', NULL, NULL, NULL);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (460, 'Pollo con puré', NULL, NULL, NULL);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (461, 'Pavo con arroz', NULL, NULL, NULL);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (462, 'Pavo con papas cocidas', NULL, NULL, NULL);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (463, 'Carne con papas', NULL, NULL, NULL);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (464, 'Pavo con fideos', NULL, NULL, NULL);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (466, 'Pollo con arroz', NULL, NULL, NULL);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (467, 'Pavo con púre', NULL, NULL, NULL);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (468, 'Carne con arroz', NULL, NULL, NULL);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (469, 'Pollo con fideos', NULL, NULL, NULL);
INSERT INTO public.plato (id, nombre, descripcion, foto, calorias) VALUES (1, '', NULL, NULL, NULL);


--
-- TOC entry 3977 (class 0 OID 17220)
-- Dependencies: 199
-- Data for Name: tipomenu; Type: TABLE DATA; Schema: public; Owner: doadmin
--

INSERT INTO public.tipomenu (id, nombre) VALUES (1, 'de la casa');
INSERT INTO public.tipomenu (id, nombre) VALUES (2, 'oficina');
INSERT INTO public.tipomenu (id, nombre) VALUES (3, 'industrial');
INSERT INTO public.tipomenu (id, nombre) VALUES (4, 'hipocalorico');
INSERT INTO public.tipomenu (id, nombre) VALUES (5, 'vegetariano');
INSERT INTO public.tipomenu (id, nombre) VALUES (6, 'regimen');


--
-- TOC entry 3985 (class 0 OID 17254)
-- Dependencies: 207
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: doadmin
--

INSERT INTO public.tokens (id, rut, pass, api_key, rol, "usuarioId") VALUES (17, 77372150, 'casino2019', '', 'admin', 17);
INSERT INTO public.tokens (id, rut, pass, api_key, rol, "usuarioId") VALUES (18, 18990554, 'casino2019', '', 'cliente', 18);
INSERT INTO public.tokens (id, rut, pass, api_key, rol, "usuarioId") VALUES (19, 18094015, 'casino2019', '', 'cliente', 19);


--
-- TOC entry 3987 (class 0 OID 17267)
-- Dependencies: 209
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: doadmin
--

INSERT INTO public.usuario (id, rut, nombre, empleados, correo) VALUES (17, 77372150, 'Casinos Integrados', 32, 'ventas@casinosintegrados.cl');
INSERT INTO public.usuario (id, rut, nombre, empleados, correo) VALUES (18, 18990554, 'Empresa de prueba 1', 132, 'fernandonavajas1@gmail.com');
INSERT INTO public.usuario (id, rut, nombre, empleados, correo) VALUES (19, 18094015, 'Empresa de prueba 2', 13, 'fernandonavajas1@gmail.com');


--
-- TOC entry 4004 (class 0 OID 0)
-- Dependencies: 200
-- Name: carta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: doadmin
--

SELECT pg_catalog.setval('public.carta_id_seq', 202, true);


--
-- TOC entry 4005 (class 0 OID 0)
-- Dependencies: 202
-- Name: detalle_id_seq; Type: SEQUENCE SET; Schema: public; Owner: doadmin
--

SELECT pg_catalog.setval('public.detalle_id_seq', 132, true);


--
-- TOC entry 4006 (class 0 OID 0)
-- Dependencies: 210
-- Name: mensaje_id_seq; Type: SEQUENCE SET; Schema: public; Owner: doadmin
--

SELECT pg_catalog.setval('public.mensaje_id_seq', 1, false);


--
-- TOC entry 4007 (class 0 OID 0)
-- Dependencies: 204
-- Name: pedido_id_seq; Type: SEQUENCE SET; Schema: public; Owner: doadmin
--

SELECT pg_catalog.setval('public.pedido_id_seq', 63, true);


--
-- TOC entry 4008 (class 0 OID 0)
-- Dependencies: 196
-- Name: plato_id_seq; Type: SEQUENCE SET; Schema: public; Owner: doadmin
--

SELECT pg_catalog.setval('public.plato_id_seq', 469, true);


--
-- TOC entry 4009 (class 0 OID 0)
-- Dependencies: 198
-- Name: tipomenu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: doadmin
--

SELECT pg_catalog.setval('public.tipomenu_id_seq', 12, true);


--
-- TOC entry 4010 (class 0 OID 0)
-- Dependencies: 206
-- Name: tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: doadmin
--

SELECT pg_catalog.setval('public.tokens_id_seq', 19, true);


--
-- TOC entry 4011 (class 0 OID 0)
-- Dependencies: 208
-- Name: usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: doadmin
--

SELECT pg_catalog.setval('public.usuario_id_seq', 19, true);


-- Completed on 2019-06-21 14:10:51

--
-- PostgreSQL database dump complete
--

