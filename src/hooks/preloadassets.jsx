import { useEffect, useState } from "react";

import button from '../assets/buttons/pressed button.png';
import book_overlay from '../assets/overlays/book_overlay.png';
import desktop_overlay from '../assets/overlays/desktop_overlay.png';
import pictureframe_overlay from '../assets/overlays/pictureframe_overlay.png';
import fifi_lowres from '../assets/overlays/fifi-lowres.png';
import hangingframe_overlay from '../assets/overlays/hangingframe_overlay.png';
import duoduo_highres from "../assets/overlays/duoduo_highres.jpg";
import shelf_overlay from '../assets/overlays/shelf_overlay.png';
import info_avatar from '../assets/overlays/info/info_avatar.png';
import info_menu from '../assets/overlays/info/info_menu.png';
import info_camera from '../assets/overlays/info/info_camera.svg';
import info_capybara from '../assets/overlays/info/info_capybara.svg';
import info_cat from '../assets/overlays/info/info_cat.svg';
import info_magnifyglass from '../assets/overlays/info/info_magnifyglass.svg';
import info_pretzel from '../assets/overlays/info/info_pretzel.svg';
import info_snowman from '../assets/overlays/info/info_snowman.svg';
import info_drink from '../assets/overlays/info/info_drink.png';
import info_airpods from '../assets/overlays/info/info_airpods.png';
import info_necklace from '../assets/overlays/info/info_necklace.png';
import info_qmark from '../assets/overlays/info/info_qmark.png';

import arduino_icon from '../assets/overlays/languages/arduino_icon.png';
import canva_icon from '../assets/overlays/languages/canva_icon.png';
import cpp_icon from '../assets/overlays/languages/cpp_icon.png';
import css_icon from '../assets/overlays/languages/css_icon.png';
import figma_icon from '../assets/overlays/languages/figma_icon.png';
import github_icon from '../assets/overlays/languages/github_icon.png';
import google_icon from '../assets/overlays/languages/google_icon.png';
import html_icon from '../assets/overlays/languages/html_icon.png';
import intellij_icon from '../assets/overlays/languages/intellij_icon.png';
import java_icon from '../assets/overlays/languages/java_icon.png';
import js_icon from '../assets/overlays/languages/js_icon.png';
import microsoft_icon from '../assets/overlays/languages/microsoft_icon.png';
import pycharm_icon from '../assets/overlays/languages/pycharm_icon.png';
import python_icon from '../assets/overlays/languages/python_icon.webp';
import restapi_icon from '../assets/overlays/languages/restapi_icon.png';
import solidworks_icon from '../assets/overlays/languages/solidworks_icon.png';
import sql_icon from '../assets/overlays/languages/sql_icon.png';
import uiux_icon from '../assets/overlays/languages/uiux_icon.png';
import vscode_icon from '../assets/overlays/languages/vscode_icon.png';
import nodejs_icon from '../assets/overlays/languages/nodejs_icon.png';
import bootstrap_icon from '../assets/overlays/languages/bootstrap_icon.jpg';
import django_icon from '../assets/overlays/languages/django_icon.avif';
import react_icon from '../assets/overlays/languages/react_icon.png';
import pygame_icon from '../assets/overlays/languages/pygame_icon.ico';
import music_on from "../assets/home-page/room/music.gif";

import fitness1 from '../assets/overlays/projects/fitness1.png';
import fitness2 from '../assets/overlays/projects/fitness2.png';
import fitness3 from '../assets/overlays/projects/fitness3.jpg';
import fitness4 from '../assets/overlays/projects/fitness4.mp4';
import fitness5 from '../assets/overlays/projects/fitness5.jpg';
import rover1 from '../assets/overlays/projects/rover1.mp4';
import rover2 from '../assets/overlays/projects/rover2.mp4';
import fallingblocks1 from '../assets/overlays/projects/fallingblocks1.mp4';


import empty_room from "../assets/home-page/room/empty_room-removebg-preview.png"
import closed_drapes from "../assets/home-page/room/closed_drapes-removebg-preview.png"
import open_drapes from "../assets/home-page/room/open_drapes-removebg-preview.png"
import glass_window from "../assets/home-page/room/window-removebg-preview.png"
import bed from "../assets/home-page/room/bed-removebg-preview.png"
import coffeetable_and_drawer from "../assets/home-page/room/coffee_table_and_drawer-removebg-preview.png"
import shelf from "../assets/home-page/room/shelf-removebg-preview.png"
import pctable from "../assets/home-page/room/pc_table-removebg-preview.png"
import plants from "../assets/home-page/room/plants-removebg-preview.png"
import papers from "../assets/home-page/room/papers-removebg-preview.png"
import awards from "../assets/home-page/room/awards-removebg-preview.png"
import picture_frame from "../assets/home-page/room/picture_frame-removebg-preview.png"
import hanging_frame from "../assets/home-page/room/hanging_frame-removebg-preview.png"
import lights from "../assets/home-page/room/lights-removebg-preview.png"
import stereo from "../assets/home-page/room/stereo-removebg-preview.png"
import music_off from "../assets/home-page/room/no_music.png"
import music_file from '../assets/home-page/room/kiss_my_scars.mp3';
import button_click from '../assets/buttons/Button 4.mp3'
import duoduo_bark_sound from '../assets/home-page/room/duoduo-bark.mp3';
import duoduo_sit from '../assets/home-page/room/duoduo.png';
import duoduo_bark from '../assets/home-page/room/duoduo_bark.png';

import doors_open from '../assets/start-page/start_page_open_door.png';
import doors_closed from '../assets/start-page/start_page_closed_door.png';

import home_icon from '../assets/buttons/home.svg';
import info_icon from '../assets/buttons/info.svg';
import link_icon from '../assets/buttons/link out.svg';
import mail_icon from '../assets/buttons/mail.svg';
import unpressed_button from '../assets/buttons/unpressed button.png';

import person_icon from '../assets/home-page/person_icon.png';


const preloadImages = [
    // buttons
    button,
    unpressed_button,
    home_icon,
    info_icon,
    link_icon,
    mail_icon,

    // overlays
    book_overlay,
    desktop_overlay,
    pictureframe_overlay,
    fifi_lowres,
    hangingframe_overlay,
    duoduo_highres,
    shelf_overlay,

    // info overlays
    info_avatar,
    info_menu,
    info_drink,
    info_airpods,
    info_necklace,
    info_qmark,

    // info svgs (can still preload as <img>)
    info_camera,
    info_capybara,
    info_cat,
    info_magnifyglass,
    info_pretzel,
    info_snowman,

    // language icons
    arduino_icon,
    canva_icon,
    cpp_icon,
    css_icon,
    figma_icon,
    github_icon,
    google_icon,
    html_icon,
    intellij_icon,
    java_icon,
    js_icon,
    microsoft_icon,
    pycharm_icon,
    python_icon,
    restapi_icon,
    solidworks_icon,
    sql_icon,
    uiux_icon,
    vscode_icon,
    nodejs_icon,
    bootstrap_icon,
    django_icon,
    react_icon,
    pygame_icon,

    // projects (only the images, skip mp4s)
    fitness1,
    fitness2,
    fitness3,
    fitness5,

    // home-page room assets
    empty_room,
    closed_drapes,
    open_drapes,
    glass_window,
    bed,
    coffeetable_and_drawer,
    shelf,
    pctable,
    plants,
    papers,
    awards,
    picture_frame,
    hanging_frame,
    lights,
    stereo,
    music_off,
    music_on,
    duoduo_sit,
    duoduo_bark,

    // start page
    doors_open,
    doors_closed,

    // misc
    person_icon,
];


export function usePreloadAssets() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let isCancelled = false;

        async function preload() {
            try {
                await Promise.all(
                    preloadImages.map(
                        (src) =>
                            new Promise((resolve) => {
                                const img = new Image();
                                img.src = src;
                                img.onload = resolve;
                                img.onerror = resolve;
                            })
                    )
                );

                if (!isCancelled) {
                    setIsLoaded(true);
                }
            } catch (err) {
                console.error("Preload error:", err);
                setIsLoaded(true);
            }
        }

        preload();

        return () => {
            isCancelled = true;
        };
    }, []);

    return isLoaded;
}