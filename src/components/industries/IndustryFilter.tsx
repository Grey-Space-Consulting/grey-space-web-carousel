
import { useState } from "react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import { SolutionCategory } from "@/types/industry";
import { Badge } from "@/components/ui/badge";

interface IndustryFilterProps {
  selectedSolutions: SolutionCategory[];
  onFilterChange: (solutions: SolutionCategory[]) => void;
}

const solutionOptions: SolutionCategory[] = [
  "All", 
  "CRM", 
  "Automation", 
  "Chatbots", 
  "Telephony", 
  "Integration", 
  "Migration",
  "Analytics",
  "Support"
];

const IndustryFilter = ({ selectedSolutions, onFilterChange }: IndustryFilterProps) => {
  // Handle selecting a solution
  const toggleSolution = (solution: SolutionCategory) => {
    if (solution === "All") {
      // If "All" is selected, clear all other filters
      onFilterChange(["All"]);
      return;
    }
    
    // If a specific solution is selected, remove "All" from the selection
    let newSelection = selectedSolutions.filter(s => s !== "All");
    
    // Toggle the selected solution
    if (newSelection.includes(solution)) {
      newSelection = newSelection.filter(s => s !== solution);
      // If no solutions are selected, default to "All"
      if (newSelection.length === 0) {
        newSelection = ["All"];
      }
    } else {
      newSelection.push(solution);
    }
    
    onFilterChange(newSelection);
  };
  
  // Clear all filters
  const clearFilters = () => {
    onFilterChange(["All"]);
  };

  return (
    <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
      <div className="flex flex-wrap items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-9 border-dashed">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-52">
            <DropdownMenuLabel>Filter by Solution</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {solutionOptions.map((solution) => (
              <DropdownMenuItem
                key={solution}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleSolution(solution)}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  {selectedSolutions.includes(solution) && (
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  )}
                </div>
                <span>{solution}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-wrap gap-2 flex-1 min-w-0">
        {selectedSolutions.filter(s => s !== "All").map((solution) => (
          <Badge 
            key={solution} 
            variant="outline" 
            className="bg-background"
          >
            {solution}
            <X 
              className="ml-1 h-3 w-3 cursor-pointer" 
              onClick={() => toggleSolution(solution)} 
            />
          </Badge>
        ))}
        
        {selectedSolutions.filter(s => s !== "All").length > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-7 px-2 text-xs" 
            onClick={clearFilters}
          >
            Clear all
          </Button>
        )}
      </div>
    </div>
  );
};

export default IndustryFilter;
