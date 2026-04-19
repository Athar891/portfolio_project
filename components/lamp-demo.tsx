"use client";
import React from "react";
import { LampContainer } from "@/components/ui/lamp";

export default function LampDemo({ children }: { children?: React.ReactNode }) {
  return <LampContainer>{children}</LampContainer>;
}
