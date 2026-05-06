import { createFileRoute } from "@tanstack/react-router";
import { BadgeApp } from "@/components/BadgeApp";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <BadgeApp />;
}
